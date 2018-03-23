import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { Preferences } from '../auth/preferences/preferences.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public preferences: Preferences;
  public formState: boolean;
  public user: any;

  public constructor(private authService: AuthService, private router: Router) { }

  public ngOnInit() {
    this.user = this.authService.getUser();
  }

  public logout() {
    this.authService.logout().then(() => {
      this.router.navigate(['/auth']);
    });
  }

  public submitPreferences(preferences: Preferences): void {
    setTimeout(() => {
      this.toggleFormState();
    }, 500);
  }

  public toggleFormState(): void {
    this.formState = !this.formState;
  }
  public getPreferences(user: any): Preferences {
    if (user) {
      return { hasAllergies: user.hasAllergies, allergies: user.allergies, diet: user.diet[0] };
    }
    return null;
  }
}
