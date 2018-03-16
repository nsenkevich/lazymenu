import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { auth } from 'firebase/app';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { UserAllergies } from './userAllergies';
import { UserDiet } from './userDiet';
import { User } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  public isLoading: boolean;
  public user: User;
  public registrationStep: number;
  public passReset: boolean;
  public registrationOpen: boolean;
  public forgotPasswordOpen: boolean;
  public allergies: Array<Object>;
  public diet: Array<Object>;

  public registrationForm: FormGroup;
  public loginForm: FormGroup;
  public forgotPasswordForm: FormGroup;
  public userPreferencesForm: FormGroup;

  constructor(private authService: AuthService, private router: Router, private snackBar: MatSnackBar, private fb: FormBuilder) {
    this.isLoading = true;
    this.registrationStep = 1;
    this.allergies = UserAllergies;
    this.diet = UserDiet;
  }

  ngOnInit() {
    this.getUser();
    this.createLoginForm();
    this.createRegistrationForm();
    this.createForgotPasswordForm();
    this.createUserPreferencesForm();
  }

  private getUser(): void {
    this.isLoading = true;
    this.authService.getUser().subscribe((user) => {
      if (user && !(user as any).hasAllergies) {
        this.registrationStep = 2;
      }
      this.user = user;
      this.isLoading = false;
    }, (err) => {
      this.snackBar.open(err);
    });
  }

  private createLoginForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  private createRegistrationForm(): void {
    this.registrationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      passwordCopy: ['', [Validators.required, Validators.minLength(6), this.checkPassword]]
    });
  }

  private createForgotPasswordForm(): void {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  private createUserPreferencesForm(): void {
    this.userPreferencesForm = this.fb.group({
      hasAllergies: ['no', []],
      allergies: [[], []],
      diet: [[], []]
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

  public register(): void {
    if (this.registrationForm.valid) {
      const promise = this.authService.signUp(this.registrationForm.value.email, this.registrationForm.value.password);
      this.handleRegistration(promise);
      this.createUserPreferencesForm();
      this.createRegistrationForm();
    }
  }

  public submitPreferences(): void {
    if (this.userPreferencesForm.valid) {
      const details = this.userPreferencesForm.value;
      if (this.user) {
        this.user.hasAllergies = details.hasAllergies || 'no';
        this.user.allergies = details.allergies || [];
        this.user.diet = details.diet || [];
        this.authService.updateUser(this.user);
        this.router.navigate(['/profile']);
      }
    }
  }

  public resetPassword(): void {
    if (this.forgotPasswordForm.valid) {
      this.authService.resetPassword(this.forgotPasswordForm.value.email).then(
        (res) => {
          this.passReset = true;
          this.snackBar.open('Please, check your email');
          this.forgotPasswordOpen = false;
        });
    }
  }

  public login(): void {
    if (this.loginForm.valid) {
      const promise = this.authService.login(this.loginForm.value.email, this.loginForm.value.password);
      this.handleLogin(promise);
    }
  }

  public loginWithGoogle(): void {
    this.handleSocialLogin(this.authService.loginWithGoogle());
  }

  public loginWithFacebook(): void {
    this.handleSocialLogin(this.authService.loginWithFacebook());
  }

  public logout(): void {
    this.authService.logout();
  }

  private handleRegistration(login: Promise<any>): void {
    login.then((userFromAuth) => {
      const user: User = { uid: userFromAuth.uid, email: userFromAuth.email };
      this.authService.updateUser(user);
      this.snackBar.open('Welcome back ' + user.uid);
    })
      .catch((error) => {
        this.snackBar.open('Something went wrong: ', error.message);
      });
  }

  private handleSocialLogin(login: Promise<any>): void {
    login.then((userFromAuth) => {
      const user: User = { uid: userFromAuth.user.uid, email: userFromAuth.user.email };
      this.authService.getUser().take(1).subscribe((userFromDb) => {
        if (!userFromDb) {
          this.authService.updateUser(user);
        } else {
          this.snackBar.open('Welcome back ' + user.uid);
          this.router.navigate(['/profile']);
        }
      });
    })
      .catch((error) => {
        this.snackBar.open('Something went wrong: ', error.message);
      });
  }

  private handleLogin(login: Promise<any>): void {
    login.then((userFromAuth) => {
      this.snackBar.open('Welcome back ' + userFromAuth.uid);
      this.router.navigate(['/profile']);
    })
      .catch((error) => {
        this.snackBar.open('Something went wrong: ', error.message);
      });
  }
}
