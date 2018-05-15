import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { Component, OnInit, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  public user: any;
  @Input() draw: any;

  constructor(private authService: AuthService, private router: Router) { }
  ngOnInit() {
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

  public toggle(): void {
    if (this.draw.opened) {
      return this.draw.close();
    }
    return this.draw.open();
  }
}

