import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router
  ) {
  }

  canActivate(
    // tslint:disable-next-line:variable-name
    _activatedRoute: ActivatedRouteSnapshot,
    router: RouterStateSnapshot): Observable<boolean> {
    const url: string = router.url;
    return of(false)
      .pipe(switchMap((isLogged) => {
        if (!isLogged && (url === '/login' || url === '/signup')) {
          return of(true);
        }
        if (isLogged && (url === '/login' || url === '/signup')) {
          this.router.navigate(['/backoffice']);
          return of(false);
        }
        if (!isLogged) {
          this.router.navigate(['/login']);
        }
        return of(isLogged);
      }));
  }

}
