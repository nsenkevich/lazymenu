import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class LoggedInGuard implements CanActivate {

  public constructor(private authService: AuthService, private router: Router) { }

  public canActivate() {
    return new Observable<boolean>(observer => {
      this.authService.getUser().take(1).subscribe((user) => {
        if (user && (user as any).hasAllergies) {
          observer.next(false);
          this.router.navigate(['/profile']);
        } else {
          observer.next(true);
        }
      });
    });
  }
}
