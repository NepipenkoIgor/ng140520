import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'backoffice'
  },
  {
    path: 'login',
    // canActivate: [AuthGuard],
    loadChildren: () => import('./content/login/login.module').then((m) => m.LoginModule)
  },
  {
    path: 'signup',
    // canActivate: [AuthGuard],
    loadChildren: () => import('./content/signup/signup.module').then((m) => m.SignupModule)
  },
  {
    path: 'backoffice',
    // canActivate: [AuthGuard],
    loadChildren: () => import('./content/backoffice/backoffice.module').then((m) => m.BackofficeModule)
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
  ],
  providers: [AuthGuard]
})
export class AppRouterModule {
}
