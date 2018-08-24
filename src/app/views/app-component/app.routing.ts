import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { loginRoute } from '../login-component/login.route';

const routes: Routes = [
  ...loginRoute
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        useHash: false
      }
    )
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRouting { }
