import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { auth } from 'firebase/app';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']
  })
export class AuthComponent implements OnInit {
  public email: string;
  public password: string;
  public showContent: Boolean = false;

  private authService: AuthService;
  private router: Router;
  private snackBar: MatSnackBar;

  constructor(authService: AuthService, router: Router, snackBar: MatSnackBar) {
    this.router = router;
    this.authService = authService;
    this.snackBar = snackBar;
  }

  public ngOnInit() {
    this.authService.user.subscribe((user) => {
        if (user) {
          this.router.navigateByUrl('/profile');
        }
        this.showContent = true;
      }
    );
  }

  public signup() {
    this.handleLogin(this.authService.signup(this.email, this.password));
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

  public isLoggedIn() {
    return this.authService.isLoggedIn();
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
