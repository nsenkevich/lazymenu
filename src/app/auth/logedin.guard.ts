import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { AuthService} from './auth.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { auth } from 'firebase/app';

@Injectable()
export class LogedinGuard implements CanActivate {

  private authService: AuthService;
  private router: Router;

  public constructor(authService: AuthService, router: Router) {
    this.authService = authService;
    this.router = router;
  }

  public canActivate() {
    return new Observable<boolean>( observer => {
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
