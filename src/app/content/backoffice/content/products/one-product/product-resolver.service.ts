import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { IProduct } from '../../../../../custom-interceptor.service';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class ProductResolverService implements Resolve<IProduct | null> {

  constructor(
    private readonly http: HttpClient,
    private readonly router: Router,
  ) {
  }

  public resolve(activatedRouteSnapshot: ActivatedRouteSnapshot): Observable<IProduct | null> {
    return this.http.get<IProduct | null>(`/products/${activatedRouteSnapshot.paramMap.get('productId')}`)
      .pipe(
        map((product) => {
          if (!product) {
            this.router.navigate(['/backoffice']);
          }
          return product;
        }),
        catchError(() => {
          this.router.navigate(['/backoffice']);
          return of(null);
        })
      );
  }
}
