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
  private firebaseAuth: AngularFireAuth;
  private afs: AngularFirestore;
  private router: Router;

  public constructor(firebaseAuth: AngularFireAuth, afs: AngularFirestore, router: Router) {
    this.router = router;
    this.firebaseAuth = firebaseAuth;
    this.afs = afs;
  }

  public getUser() {
    return this.firebaseAuth.authState.switchMap(user => {
      if (user) {
        return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
      }
      return Observable.of(null);
    });
  }

  public signUp(email: string, password: string) {
    return this.firebaseAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  public loginWithGoogle() {
    return this.oAuthLogin(new firebase.auth.GoogleAuthProvider());
  }

  public loginWithFacebook() {
    return this.oAuthLogin(new firebase.auth.FacebookAuthProvider());
  }

  public login(email: string, password: string) {
    return this.firebaseAuth.auth.signInWithEmailAndPassword(email, password);
  }

  public resetPassword(email: string) {
    return this.firebaseAuth.auth.sendPasswordResetEmail(email);
  }

  public logout() {
    return this.firebaseAuth.auth.signOut();
  }

  public updateUser(user: User) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
    userRef.set(user);
  }

  private oAuthLogin(provider: firebase.auth.AuthProvider) {
    return this.firebaseAuth.auth.signInWithPopup(provider);
  }
}
