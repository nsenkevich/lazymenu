import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { User } from './user';
import { LogInDetails } from './log-in/log-in.component';
import { RegistrationDetails } from './registration/registration.component';
import { Preferences } from './preferences/preferences.component';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  public isLoading: boolean;
  public user: User;
  public processingForm: boolean;
  public registrationStep: number;
  public passReset: boolean;
  public registrationOpen: boolean;
  public forgotPasswordOpen: boolean;

  constructor(private authService: AuthService, private router: Router, private snackBar: MatSnackBar) {
    this.processingForm = false;
    this.isLoading = true;
    this.registrationStep = 1;
  }

  ngOnInit() {
    this.authService.getUser().subscribe((user) => {
      if (user && !(user as any).hasAllergies) {
        this.registrationStep = 2;
      }
      if (user && user.hasAllergies) {
        this.router.navigate(['/profile']);
      }
      this.user = user;
      this.isLoading = false;
    }, (err) => {
      this.snackBar.open(err);
    });
  }

  private handleRegistration(login: Promise<any>): void {
    login.then((userFromAuth) => {
      const user = User.createFromRegistration(userFromAuth.user.uid, userFromAuth.user.email);
      this.authService.updateUser(user);
      this.snackBar.open('Welcome ' + user.email, '', {
        duration: 1000,
      });
    }).catch((error) => {
      this.snackBar.open('Something went wrong: ' + error.message);
    });
  }

  private handleSocialLogin(login: Promise<any>): void {
    login.then((userFromAuth) => {
      if (userFromAuth.additionalUserInfo.isNewUser) {
        const user = User.createFromSocial(
          userFromAuth.user.uid,
          userFromAuth.user.email,
          userFromAuth.user.displayName,
          userFromAuth.user.photoURL,
        );
        this.authService.updateUser(user);
      }
      this.snackBar.open('Welcome back! ' + userFromAuth.user.displayName, '', {
        duration: 1000,
      });
    }).catch((error) => {
      this.snackBar.open('Something went wrong: ' + error.message);
    });
  }

  private handleLogin(login: Promise<any>): void {
    login.then(user => {
      this.snackBar.open('Welcome back! ' + user.name, '', {
        duration: 1000,
      });
      this.router.navigateByUrl('/profile');
    }).catch(error => {
      this.snackBar.open('Something went wrong: ' + error.message);
    });
  }

  public register(details: RegistrationDetails): void {
    this.handleRegistration(this.authService.signUp(details.email, details.password));
  }

  public submitPreferences(details: Preferences): void {
    this.processingForm = true;
    const user = User.createFromSocial(this.user.uid, this.user.email, this.user.name, this.user.avatar);
    user.setAllergies(details.allergies || []);
    user.setDiet([details.diet] || []);

    this.authService.updateUser(user);
  }

  public resetPassword(email: string): void {
    this.authService.resetPassword(email).then(
      (res) => {
        this.passReset = true;
        this.snackBar.open('Recovery email sent to ' + email, '', {
          duration: 5000,
        });
        setTimeout(() => {
          this.forgotPasswordOpen = false;
        }, 5000);
      });
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

}
