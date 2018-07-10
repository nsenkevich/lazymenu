import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import { tap, map, take } from 'rxjs/operators';

@Injectable()
export class IsAdminGuard implements CanActivate {

    public constructor(private authService: AuthService, private router: Router) { }

    public canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.authService.getUser().pipe(
            take(1),
            map(user => user && user.isAdmin()),
            tap(isAdmin => {
                if (!isAdmin) {
                    this.router.navigate(['/menu']);
                }
            })
        );
    }
}
