import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbDateParserFormatter, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TextMaskModule } from 'angular2-text-mask';
import { ControlModule } from '../../components/controls.module';
import { NgbDateRuParserFormatter } from '../../tools/ngb-date-ru-parser-formatter';
import { LoginComponent } from './login.component';
import { PassportComponent } from './passport-component/passport.component';
import { PassportService } from './passport-component/passport.service';
import { RegistrationComponent } from './registration-component/registration.component';
import { RegistrationService } from './registration-component/registration.service';
import { SignInComponent } from './signin-component/signin.component';
import { SignInService } from './signin-component/signin.service';

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
    PassportComponent,
    SignInComponent
  ],
  exports: [
    LoginComponent,
    RegistrationComponent,
    PassportComponent,
    SignInComponent
  ],
  providers: [
    RegistrationService,
    PassportService,
    SignInService,
    {
      provide: NgbDateParserFormatter,
      useClass: NgbDateRuParserFormatter
    }
  ]
})
export class LoginModule { }
