import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
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
}
