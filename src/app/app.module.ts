import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SharedModule } from './shared/shared.module';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductsFilterPipe } from './products-filter.pipe';
import { ExchangeRateComponent } from './header/exchange-rate/exchange-rate.component';
import { ExchangeRateDirective } from './header/exchange-rate/exchange-rate.directive';
import { HiddenDirective } from './header/exchange-rate/hidden.directive';
import { environment } from '../environments/environment';
import { BASE_URL } from './config';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomInterceptorService } from './custom-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    ProductCardComponent,
    ProductsFilterPipe,
    ExchangeRateComponent,
    ExchangeRateDirective,
    HiddenDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule
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
    }
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule {
}
