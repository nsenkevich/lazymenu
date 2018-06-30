import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { User } from '../auth/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  public user: User;

  constructor(private authService: AuthService, private router: Router) {
    this.user = User.createGuest();
  }

  ngOnInit() {
    this.authService.getUser().subscribe((user) => {
      if (user != null) {
        this.user = user;
      }
    });
  }

  public logout() {
    this.authService.logout().then(() => {
      this.user = User.createGuest();
      this.router.navigate(['/auth']);
    });
  }

}
