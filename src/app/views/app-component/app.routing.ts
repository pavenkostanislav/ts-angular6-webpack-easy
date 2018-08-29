import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loginRoute } from '../login-component/login.route';

const routes: Routes = [
  ...loginRoute
];

const routingModule: ModuleWithProviders = RouterModule.forRoot(routes,
  {
    useHash: false
  });

@NgModule({
  imports: [routingModule],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRouting { }
