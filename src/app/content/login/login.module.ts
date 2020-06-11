import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { LoginRouterModule } from './login-router.module';
import { LoginComponent } from './login.component';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    SharedModule,
    LoginRouterModule
  ]
})
export class LoginModule {
}
