import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { getProductsPending, getProductsSuccess } from '../actions/products.action';
import { catchError, map, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../../custom-interceptor.service';
import { EMPTY } from 'rxjs';

@Injectable()
export class ProductsEffects {

  getProducts$ = createEffect(() => this.actions$.pipe(
    ofType(getProductsPending),
    switchMap(() => this.http.get<IProduct[]>(`/products`)
      .pipe(
        map((products: IProduct[]) => getProductsSuccess({products})),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient
  ) {
  }
}
