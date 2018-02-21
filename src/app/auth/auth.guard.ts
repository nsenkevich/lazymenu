import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { AuthService} from './auth.service';
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
    if (this.authService.isLoggedIn()) {
        return true;
    }

    this.router.navigate(['/auth']);
    return false;
  }

}
