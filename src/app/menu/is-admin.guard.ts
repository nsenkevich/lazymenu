import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class IsAdminGuard implements CanActivate {
  public constructor(private authService: AuthService, private router: Router) { }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {

    return new Observable<boolean>(observer => {
      this.authService.getUser().take(1).subscribe((user) => {
        if (!user || (user as any).email !== 'upavelko@gmail.com') {
          observer.next(false);
          this.router.navigate(['/menu']);
        } else {
          observer.next(true);
        }
      });
    });
  }
}
