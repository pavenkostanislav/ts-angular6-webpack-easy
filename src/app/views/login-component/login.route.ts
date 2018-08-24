import { Route } from '@angular/router';
import { routes } from '../../dictionaries';
import { LoginComponent } from './login.component';
import { PassportComponent } from './passport-component/passport.component';
import { RegistrationComponent } from './registration-component/registration.component';


export const loginRoute: Route[] = [
  {
    path: routes.login.url,
    component: LoginComponent
  }
  //,
  //{
  //  path: routes.registration.url,
  //  component: RegistrationComponent
  //},
  //{
  //  path: routes.passport.url,
  //  component: PassportComponent
  //}
];


