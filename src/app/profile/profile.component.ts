import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  formState: boolean;
  private authService: AuthService;
  private router: Router;
  public user: any;

  public constructor(authService: AuthService, router: Router) {
    this.authService = authService;
    this.router = router;

  }

  public ngOnInit() {
    this.user = this.authService.getUser();
  }

  public logout() {
    this.authService.logout().then(() => {
      this.router.navigate(['/auth']);
    });
  }

  public submitPreferences(preferences: any): void {
    setTimeout(() => {
      this.toggleFormState();
    }, 500);
  }

  public toggleFormState(): void {
    this.formState = !this.formState;
  }
}
