import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;

  constructor(private firebaseAuth: AngularFireAuth, private router: Router) {
    this.user = firebaseAuth.authState;
    this.router = router;
  }

  signup(email: string, password: string) {
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success!', value);
        this.router.navigateByUrl('/auth');
      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
      });
  }

  googleLogin() {
    this.firebaseAuth
    .auth
    .signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then(value => {
     console.log('Sucess', value),
     this.router.navigateByUrl('/auth');
   })
    .catch(error => {
      console.log('Something went wrong: ', error);
    });
  }

  login(email: string, password: string) {
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Nice, it worked!');
        this.router.navigateByUrl('/auth');
      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
      });
  }

  logout() {
    this.firebaseAuth.auth.signOut().then(() => {
        this.router.navigate(['/auth']);
    });
  }

}