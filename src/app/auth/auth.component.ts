import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { User } from './auth.service';
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
      this.user = user;
      this.isLoading = false;
    }, (err) => {
      this.snackBar.open(err);
    });
  }

  private handleRegistration(login: Promise<any>): void {
    login.then((userFromAuth) => {
      const user: User = { uid: userFromAuth.uid, email: userFromAuth.email };
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

  public register(details: RegistrationDetails): void {
    this.handleRegistration(this.authService.signUp(details.email, details.password));
  }

  public submitPreferences(details: Preferences): void {
    this.processingForm = true;
    this.user.hasAllergies = details.hasAllergies || 'no';
    this.user.allergies = details.allergies || [];
    this.user.diet = [details.diet] || [];
    this.authService.updateUser(this.user);
    setTimeout(() => {
      this.router.navigate(['/profile']);
      this.processingForm = false;
    }, 2000);
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

  public logout(): void {
    this.authService.logout();
  }
}
