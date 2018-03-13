import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  private authService: AuthService;
  private router: Router;
  public user: any;

  public constructor(authService: AuthService, router: Router) {
    this.authService = authService;
    this.router = router;
  }

  public ngOnInit() {
    this.user = this.authService.user;
  }

  public logout() {
    this.authService.logout()
    .then(() => {
      this.router.navigate(['/auth']);
    });
  }
}