import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { Router } from '@angular/router';

export interface User {
  uid: string;
  email: string;
  name?: string;
  hasAllergies?: string;
  allergies?: Array<string>;
  diet?: Array<string>;
}

@Injectable()
export class AuthService {
  public user: Observable<firebase.User>;
  private userDetails: firebase.User = null;

  private firebaseAuth: AngularFireAuth;
  private afs: AngularFirestore;
  private router: Router;

  public constructor(firebaseAuth: AngularFireAuth, afs: AngularFirestore, router: Router) {
    this.router = router;
    this.firebaseAuth = firebaseAuth;
    this.afs = afs;
    this.getUser();
  }

  public getUser() {
    this.user = this.firebaseAuth.authState.switchMap(user => {
      if (user) {
        return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
      }
      return Observable.of(null);
    });
  }

  public signUp(email: string, password: string) {
    return this.firebaseAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(user => { console.log(user); this.updateUser(user); })
      .catch(error => console.log(error));
  }

  public loginWithGoogle() {
    return this.oAuthLogin(new firebase.auth.GoogleAuthProvider());
  }

  public loginWithTwitter() {
    return this.oAuthLogin(new firebase.auth.TwitterAuthProvider());
  }

  public loginWithFacebook() {
    return this.oAuthLogin(new firebase.auth.FacebookAuthProvider());
  }

  public login(email: string, password: string) {
    return this.firebaseAuth.auth.signInWithEmailAndPassword(email, password)
      .then((userFromAuth) => {
        this.afs.doc<User>(`users/${userFromAuth.uid}`).valueChanges()
          .subscribe((userFromDb) => {
            if (!userFromDb) {
              this.updateUser(userFromAuth);
            } else {
              this.updateUser(userFromDb);
            }
          });
      })
      .catch((error) => console.log(error));
  }

  public resetPassword(email: string) {
    return firebase.auth().sendPasswordResetEmail(email)
      .then(() => console.log('Password update email sent', 'info'))
      .catch((error) => console.log(error));
  }

  public logout() {
    return this.firebaseAuth.auth.signOut();
  }

  public updateUser(user: User) {

    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
    userRef.set(user);
  }

  private oAuthLogin(provider: firebase.auth.AuthProvider) {
    return this.firebaseAuth.auth.signInWithPopup(provider)
      .then((userFromAuth) => {
        this.afs.doc<User>(`users/${userFromAuth.user.uid}`).valueChanges()
          .subscribe((userFromDb) => {
            if (!userFromDb) {
              this.updateUser(userFromAuth.user);
            } else {
              this.updateUser(userFromDb);
            }
          });
      })
      .catch((error) => console.log(error));
  }

}
