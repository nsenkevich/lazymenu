import { User } from '@firebase/auth-types';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { auth } from 'firebase/app';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  public user: User;
  public registrationStep: number;
  public existingUser: boolean;
  public passReset: boolean;
  public registrationOpen: boolean;
  public forgotPasswordOpen: boolean;

  public registrationForm: FormGroup;
  public loginForm: FormGroup;
  public forgotPasswordForm: FormGroup;

  constructor(private authService: AuthService, private router: Router, private snackBar: MatSnackBar, private fb: FormBuilder) {
    this.user = null;
    this.registrationStep = 1;
    this.existingUser = true;
  }

  ngOnInit() {
    this.authService.user.subscribe((user) => {
      if (!user) {
        this.existingUser = false;
      }
      if (user && !(user as any).details) {
        this.registrationStep = 2;
        this.existingUser = false;
      }
      if (user && (user as any).details) {
        this.router.navigate(['/profile']);
      }
      this.user = user;
    });
    this.createLoginForm();
    this.createRegistrationForm();
    this.createForgotPasswordForm();
  }

  private createLoginForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  private createRegistrationForm(): void {
    this.registrationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      passwordCopy: ['', [Validators.required, Validators.minLength(5), this.checkPassword]]
    });
  }

  private createForgotPasswordForm(): void {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  private checkPassword = (control): Observable<{ [key: string]: string }> => {
    if (!control || !control.value || !control.value.length) {
      return null;
    }

    if (control.value !== this.registrationForm.value.password) {
      return Observable.create({ PasswordMatch: 'Fields do not match' });
    }
  }

  public toggleForm() {
    this.existingUser = !this.existingUser;
  }

  // public signup() {
  //   this.authService.signup(this.email, this.password);
  // }

  public register(): void {
    console.log(this.registrationForm);
    if (this.registrationForm.valid) {
      this.authService.signUp(this.registrationForm.value.email, this.registrationForm.value.password);
      this.createRegistrationForm();
    }
  }

  // public details() {
  //   this.user.details = 'testing';
  //   this.authService.updateUser(this.user);
  //   this.router.navigate(['/profile']);
  // }

  public resetPassword(): void {
    if (this.forgotPasswordForm.valid) {
      this.authService.resetPassword(this.forgotPasswordForm.value.email).then(
        (res) => {
          this.passReset = true;
          this.snackBar.open('Please, check your email');
        });
    }
  }

  public login(): void {
    if (this.loginForm.valid) {
      this.handleLogin(this.authService.login(this.loginForm.value.email, this.loginForm.value.password));
    }
  }

  public loginWithGoogle(): void {
    this.handleLogin(this.authService.loginWithGoogle());
  }

  public loginWithFacebook(): void {
    this.handleLogin(this.authService.loginWithFacebook());
  }

  // public loginWithTwitter() {
  //   this.handleLogin(this.authService.loginWithTwitter());
  // }

  public logout(): void {
    this.authService.logout()
      .then(() => {
        this.router.navigate(['/auth']);
      });
  }

  private handleLogin(user: any): void {
    user.then(value => {
      this.snackBar.open('Welcome back'),
        this.router.navigateByUrl('/profile');
    })
      .catch(error => {
        this.snackBar.open('Something went wrong: ', error.message, { duration: 500 });
      });
  }
}
