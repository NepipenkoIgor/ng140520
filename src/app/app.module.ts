import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './content/backoffice/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './content/backoffice/sidenav/sidenav.component';
import { SharedModule } from './shared/shared.module';
import { ProductCardComponent } from './content/backoffice/product-card/product-card.component';
import { ProductsFilterPipe } from './content/backoffice/products-filter.pipe';
import { ExchangeRateComponent } from './content/backoffice/header/exchange-rate/exchange-rate.component';
import { ExchangeRateDirective } from './content/backoffice/header/exchange-rate/exchange-rate.directive';
import { HiddenDirective } from './content/backoffice/header/exchange-rate/hidden.directive';
import { environment } from '../environments/environment';
import { BASE_URL } from './config';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomInterceptorService } from './custom-interceptor.service';
import { ModalModule } from './modal/modal.module';
import { LoginComponent } from './content/login/login.component';
import { SignupComponent } from './content/signup/signup.component';
import { BackofficeComponent } from './content/backoffice/backoffice.component';
import { ProductsService } from './content/backoffice/products.service';
import { AppRouterModule } from './app-router.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    ProductCardComponent,
    ProductsFilterPipe,
    ExchangeRateComponent,
    ExchangeRateDirective,
    HiddenDirective,
    LoginComponent,
    SignupComponent,
    BackofficeComponent,
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
