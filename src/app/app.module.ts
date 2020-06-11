import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { environment } from '../environments/environment';
import { BASE_URL } from './config';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomInterceptorService } from './custom-interceptor.service';
import { ModalModule } from './modal/modal.module';
import { ProductsService } from './content/backoffice/products.service';
import { AppRouterModule } from './app-router.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    ModalModule,
    AppRouterModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomInterceptorService,
      multi: true
    },
    {
      provide: BASE_URL,
      useValue: environment.baseUrl,
    },
    {
      provide: 'baseUrl',
      useValue: 'localhost:3333',
    },
    ProductsService
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule {
}
