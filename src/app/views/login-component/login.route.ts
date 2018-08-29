import { Routes } from '@angular/router';
import { LoginComponent } from './login.component';


export const loginRoute: Routes = [
  {
    path: '',
    redirectTo: 'login/registration',
    pathMatch: 'full'
  },
  //{
  //  path: '**',
  //  redirectTo: 'login/registration',
  //  pathMatch: 'full'
  //},
  {
    path: 'login',
    children: [
      {
        path: ':activeId',
        component: LoginComponent,
      }
    ]
  }
];