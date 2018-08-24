import { Routes } from '@angular/router';
import { routes } from '../../dictionaries';
import { LoginComponent } from './login.component';


export const loginRoute: Routes = [
  {
    path: routes.login.url,
    component: LoginComponent,
    //children: [
    //  {
    //    path: routes.registration.url,
    //    component: RegistrationComponent
    //  },
    //  {
    //    path: routes.passport.url,
    //    component: PassportComponent
    //  }
    //];
  }
]


