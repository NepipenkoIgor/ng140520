import { Observable } from 'rxjs';
import { IProduct, products$ } from './data';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class ProductsService {

  constructor(
    private http: HttpClient
  ) {
  }

  public getProducts(): Observable<IProduct[]> {
    return this.http.get<{ data: IProduct[] }>('http://localhost:8090/products', {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im5lcGlwZW5rbzEiLCJpYXQiOjE1NzYxNzgxNzN9.-dXOEZhBVHXp3goe7DROuoVTKSNIUjL-0hYDIhdzd00'
      }
    })
      .pipe(
        map((res) => {
          return res.data;
        })
      );
  }
}
