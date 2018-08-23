import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ControlModule } from '../../components/controls.module';
import { RegistrationComponent } from './registration-component/registration.component';
import { PassportComponent } from './passport-component/passport.component';
import { LoginComponent } from './login.component';
import { TextMaskModule } from 'angular2-text-mask';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NgbModule.forRoot(),
    ControlModule,
    TextMaskModule
  ],
  declarations: [
    LoginComponent,
    RegistrationComponent,
    PassportComponent
  ],
  exports: [
    LoginComponent,
    RegistrationComponent,
    PassportComponent
  ],
  providers: []
})
export class LoginModule { }
