import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { SignupComponent } from './signup.component';
import { SignupRouterModule } from './signup-router.module';



@NgModule({
  declarations: [SignupComponent],
  imports: [
    SharedModule,
    SignupRouterModule
  ]
})
export class SignupModule { }
