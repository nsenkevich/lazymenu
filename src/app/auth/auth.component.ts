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
import { LogInDetails } from './log-in/log-in.component';
import { RegistrationDetails } from './registration/registration.component';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  public processingForm: boolean;
  public isLoading: boolean;
  public user: User;
  public registrationStep: number;
  public passReset: boolean;
  public registrationOpen: boolean;
  public forgotPasswordOpen: boolean;
  public allergies: Array<Object>;
  public diet: Array<Object>;

  public forgotPasswordForm: FormGroup;
  public userPreferencesForm: FormGroup;

  constructor(private authService: AuthService, private router: Router, private snackBar: MatSnackBar, private fb: FormBuilder) {
    this.isLoading = true;
    this.processingForm = false;
    this.registrationStep = 1;
    this.allergies = UserAllergies;
    this.diet = UserDiet;
  }

  ngOnInit() {
    this.getUser();
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

  public register(details: RegistrationDetails): void {
      this.handleRegistration(this.authService.signUp(details.email, details.password));
      this.createUserPreferencesForm();
  }

  public submitPreferences(): void {
    if (this.userPreferencesForm.valid) {
      this.processingForm = true;
      const details = this.userPreferencesForm.value;
      this.user.hasAllergies = details.hasAllergies || 'no';
      this.user.allergies = details.allergies || [];
      this.user.diet = details.diet || [];
      this.authService.updateUser(this.user);
      setTimeout(() => {
        this.userPreferencesForm.reset();
        this.router.navigate(['/profile']);
        this.processingForm = false;
      }, 2000);
    }
  }

  public resetPassword(): void {
    if (this.forgotPasswordForm.valid) {
      this.authService.resetPassword(this.forgotPasswordForm.value.email).then(
        (res) => {
          this.passReset = true;
          this.snackBar.open('Please, check your email', '', {
            duration: 5000,
          });
          this.forgotPasswordOpen = false;
        });
    }
  }

  public logIn(details: LogInDetails): void {
    const promise = this.authService.login(details.email, details.password);
    this.handleLogin(promise);
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
      this.snackBar.open('Welcome ' + user.email);
    }).catch((error) => {
      this.snackBar.open('Something went wrong: ' + error.message);
    });
  }

  private handleSocialLogin(login: Promise<any>): void {
    login.then((userFromAuth) => {
      const user: User = { uid: userFromAuth.user.uid, email: userFromAuth.user.email };
      this.authService.getUser().take(1).subscribe((userFromDb) => {
        if (!userFromDb) {
          this.authService.updateUser(user);
        } else {
          this.snackBar.open('Welcome ' + user.email, '', {
            duration: 1000,
          });
          this.router.navigate(['/profile']);
        }
      });
    }).catch((error) => {
      this.snackBar.open('Something went wrong: ' + error.message);
    });
  }

  private handleLogin(login: Promise<any>): void {
    login.then(user => {
      this.snackBar.open('Welcome back! ' + user.email, '', {
        duration: 1000,
      });
      this.router.navigateByUrl('/profile');
    }).catch(error => {
      this.snackBar.open('Something went wrong: ' + error.message);
    });
  }
}
