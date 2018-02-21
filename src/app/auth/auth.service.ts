import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { Router } from '@angular/router';

interface User {
  uid: string;
  email: string;
  name?: string;
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
    console.log(this.firebaseAuth.authState);
    this.getUser();
  }

  public getUser() {
    this.user = this.firebaseAuth.authState
    .switchMap(user => {
      if (user) {
        return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
      } else {
        return Observable.of(null);
      }
    });
  }

  public signup(email: string, password: string) {
    return this.firebaseAuth.auth.createUserWithEmailAndPassword(
        email, password
      );
  }

  public loginWithGoogle() {
    return this.firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    );
  }

  public loginWithTwitter() {
    return this.firebaseAuth.auth.signInWithPopup(
      new firebase.auth.TwitterAuthProvider()
    );
  }

  public loginWithFacebook() {
    return this.firebaseAuth.auth.signInWithPopup(
      new firebase.auth.FacebookAuthProvider()
    );
  }

  public login(email: string, password: string) {
    return this.firebaseAuth.auth.signInWithEmailAndPassword(
      email, password
    );
  }

  public isLoggedIn() {
    this.user.subscribe(
      (user) => {
        if (user) {
          this.userDetails = user;
          console.log(this.userDetails);
        }
      }
    );
    if (this.userDetails == null ) {
      return false;
    } else {
      return true;
    }
  }

  public logout() {
    return this.firebaseAuth.auth.signOut();
  }
}
