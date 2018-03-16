import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { auth } from 'firebase/app';

@Injectable()
export class AuthGuard implements CanActivate {

  private authService: AuthService;
  private router: Router;

  public constructor(authService: AuthService, router: Router) {
    this.authService = authService;
    this.router = router;
  }

  public canActivate() {
    return this.authService.getUser()
      .take(1)
      .map(user => !!(user && (user as any).hasAllergies))
      .do(loggedIn => {
        if (!loggedIn) {
          console.warn('You must be logged in and have a 2 step registration!', 'error');
          this.router.navigate(['/auth']);
        }
      });
  }
}
