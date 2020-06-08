import { Inject, Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL } from './config';
import { filter, map } from 'rxjs/operators';

export interface IProduct {
  '_id': string;
  'title': string;
  'img': string;
  'price': number;
  'author': string;
  'isFavorite': boolean;
};

@Injectable()
export class CustomInterceptorService implements HttpInterceptor {

  constructor(
    @Inject(BASE_URL) private baseUrl: string
  ) {
  }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headers = req.headers.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im5lcGlwZW5rbzEiLCJpYXQiOjE1NzYxNzgxNzN9.-dXOEZhBVHXp3goe7DROuoVTKSNIUjL-0hYDIhdzd00');
    const resultReq = req.clone({
      headers,
      url: `${this.baseUrl}${req.url}`
    });

    return next.handle(resultReq)
      .pipe(
        filter((event: HttpEvent<any>): event is HttpResponse<any> => {
          return event instanceof HttpResponse;
        }),
        map((res: HttpResponse<any>) => {
          return res.clone({body: res.body && res.body.data});
        })
      );
  }
}
