import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { auth } from 'firebase/app';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';


interface User {
  uid: string;
  email: string;
  name?: string;
  details?: string;
}

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']
  })
export class AuthComponent implements OnInit {
  public email: string;
  public password: string;
  public registrationStep = 1;
  public existingUser = true;
  public user: User = null;

  private authService: AuthService;
  private router: Router;
  private snackBar: MatSnackBar;
  public passReset = false;

  constructor(authService: AuthService, router: Router, snackBar: MatSnackBar) {
    this.router = router;
    this.authService = authService;
    this.snackBar = snackBar;
  }

  public ngOnInit() {
    this.authService.user.subscribe((user) => {
        if (!user) {
          this.existingUser = false;
        }
        if (user && !(user as User).details) {
          this.registrationStep = 2;
        }
        if (user && (user as User).details) {
          this.router.navigate(['/profile']);
        }
        this.user = user;

      }
    );
  }

  toggleForm() {
    this.existingUser = !this.existingUser;
  }

  public signup() {
    this.authService.signup(this.email, this.password);
  }

  public details() {
    this.user.details = 'testing';
    this.authService.updateUser(this.user);
    this.router.navigate(['/profile']);
  }

  public resetPassword() {
    this.authService.resetPassword(this.email)
      .then(() => this.passReset = true);
  }

  public login() {
    this.handleLogin(this.authService.login(this.email, this.password));
  }

  public loginWithGoogle() {
    this.handleLogin(this.authService.loginWithGoogle());
  }

  public loginWithFacebook() {
    this.handleLogin(this.authService.loginWithFacebook());
  }

  public loginWithTwitter() {
    this.handleLogin(this.authService.loginWithTwitter());
  }

  public logout() {
    this.authService.logout()
    .then(() => {
      this.router.navigate(['/auth']);
    });
  }

  private handleLogin(user: any) {
    user.then(value => {
      this.snackBar.open('Success', value),
      this.router.navigateByUrl('/profile');
    })
     .catch(error => {
      this.snackBar.open('Something went wrong: ', error.message, {duration: 500});
     });
  }
}
