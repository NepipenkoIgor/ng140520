import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { SignupComponent } from './signup.component';
import { SignupRouterModule } from './signup-router.module';
import { SwitcherComponent } from './switcher/switcher.component';



@NgModule({
  declarations: [SignupComponent, SwitcherComponent],
  imports: [
    SharedModule,
    SignupRouterModule
  ]
})
export class SignupModule { }
