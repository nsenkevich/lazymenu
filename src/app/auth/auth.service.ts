import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import { of } from 'rxjs';

export interface User {
  uid: string;
  email: string;
  name?: string;
  avatar?: string;
  hasAllergies?: string;
  allergies?: Array<string>;
  diet?: Array<string>;
}

@Injectable()
export class AuthService {
  constructor(private firebaseAuth: AngularFireAuth, private afs: AngularFirestore) { }

  public getUser(): Observable<any> {
    return this.firebaseAuth.authState.switchMap(user => {
      if (user) {
        return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
      }
      return of(null);
    });
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

  public updateUser(user: User): void {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
    userRef.set(user);
  }

  private oAuthLogin(provider: firebase.auth.AuthProvider): Promise<any> {
    return this.firebaseAuth.auth.signInWithPopup(provider);
  }
}
