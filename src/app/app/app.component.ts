import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public user: any;

  constructor(private authService: AuthService, private router: Router) {
    this.user = this.authService.getUser();
  }

  public logout() {
    this.authService.logout().then(() => {
      this.router.navigate(['/auth']);
    });
  }

  public getUserName(email: string): string {
    const stringArray: Array<string> = email.split('@');
    return stringArray[0];
  }

}
