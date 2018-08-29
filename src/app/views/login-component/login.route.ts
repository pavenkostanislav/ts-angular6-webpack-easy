import { Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { RegistrationComponent } from './registration-component/registration.component';
import { PassportComponent } from './passport-component/passport.component';
import { SignInComponent } from './signin-component/signin.component';


export const loginRoute: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    children: [
      {
        path: '',
        component: LoginComponent,
      },
      {
        path: 'registration',
        component: RegistrationComponent
      },
      {
        path: 'passport',
        component: PassportComponent
      }
    ]
  },
  {
    path: 'signin',
    component: SignInComponent
  }
];