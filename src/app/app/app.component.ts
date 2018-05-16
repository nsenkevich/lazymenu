import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  public user: any;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.getUser().subscribe((user) => {
      this.user = user;
    });
  }

  public logout() {
    this.authService.logout().then(() => {
      this.router.navigate(['/auth']);
    });
  }

}
