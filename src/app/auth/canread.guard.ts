import { take, map, tap } from "rxjs/operators";
import { AuthService } from "./auth.service";
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";


@Injectable()
export class CanReadGuard implements CanActivate {

  public constructor(private authService: AuthService, private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.authService.getUser().pipe(
      take(1),
      map(user => user && !user.isGuest()),
      tap(canView => {
        if (!canView) {
          this.router.navigate(['/menu']);
        }
      })
    );
  }
}