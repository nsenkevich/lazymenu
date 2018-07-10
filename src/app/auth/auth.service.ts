import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import { of} from 'rxjs';
import { UserInterface, User } from './user';
import 'rxjs/add/operator/map';
@Injectable()
export class AuthService {
  private user: Observable<any>;

  constructor(private firebaseAuth: AngularFireAuth, private afs: AngularFirestore) {
    this.user = this.firebaseAuth.authState.switchMap(user => {
      if (user) {
        return  this.afs.doc<UserInterface>(`users/${user.uid}`)
        .snapshotChanges().map(action => {
            const data = action.payload.data() as UserInterface;
            const user = User.createFromSocial(data.uid, data.email, data.name, data.avatar);
            user.setAllergies(data.allergies);
            user.setDiet(data.diet);
            return user;
          });
      }
      return of(null);
    });
  }

  public getUser(): Observable<any> {
    return this.user;
  }

  public signUp(email: string, password: string): Promise<any> {
    return this.firebaseAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  public loginWithGoogle(): Promise<any> {
    return this.oAuthLogin(new firebase.auth.GoogleAuthProvider());
  }

  public loginWithFacebook(): Promise<any> {
    return this.oAuthLogin(new firebase.auth.FacebookAuthProvider());
  }

  public login(email: string, password: string): Promise<any> {
    return this.firebaseAuth.auth.signInWithEmailAndPassword(email, password);
  }

  public resetPassword(email: string): Promise<any> {
    return this.firebaseAuth.auth.sendPasswordResetEmail(email);
  }

  public logout(): Promise<any> {
    return this.firebaseAuth.auth.signOut();
  }

  public updateUser(user: UserInterface): void {
    const userRef: AngularFirestoreDocument<UserInterface> = this.afs.doc(`users/${user.uid}`);
    userRef.set(user.stringify());
  }

  private oAuthLogin(provider: firebase.auth.AuthProvider): Promise<any> {
    return this.firebaseAuth.auth.signInWithPopup(provider);
  }
}
