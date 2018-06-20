import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User, AuthService } from '../auth/auth.service';

export const AnonymousUser: User = {
  uid: '',
  email: ''
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  public user: User;

  constructor(private authService: AuthService, private router: Router) {
    this.user = AnonymousUser;
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
      this.router.navigate(['/auth']);
    });
  }

}
