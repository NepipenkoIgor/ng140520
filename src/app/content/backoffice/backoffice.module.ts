import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { BackofficeRouterModule } from './backoffice-router.module';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ExchangeRateComponent } from './header/exchange-rate/exchange-rate.component';
import { ExchangeRateDirective } from './header/exchange-rate/exchange-rate.directive';
import { HiddenDirective } from './header/exchange-rate/hidden.directive';
import { BackofficeComponent } from './backoffice.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SidenavComponent,
    ExchangeRateComponent,
    ExchangeRateDirective,
    HiddenDirective,
    BackofficeComponent
  ],
  imports: [
    SharedModule,
    BackofficeRouterModule
  ]
})
export class BackofficeModule {
}
