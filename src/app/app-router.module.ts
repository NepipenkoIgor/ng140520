import { NgModule } from '@angular/core';
import { LoginComponent } from './content/login/login.component';
import { SignupComponent } from './content/signup/signup.component';
import { BackofficeComponent } from './content/backoffice/backoffice.component';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'backoffice'
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'backoffice',
    component: BackofficeComponent,
  },
  {
    path: '**',
    redirectTo: 'backoffice'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule {
}
