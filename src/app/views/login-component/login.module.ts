import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { ControlModule } from '../../components/controls.module';
import { RegistrationComponent } from './registration-component/registration.component';
import { PassportComponent } from './passport-component/passport.component';
import { LoginComponent } from './login.component';
import { TextMaskModule } from 'angular2-text-mask';
import { NgbDateRuParserFormatter } from '../../tools/ngb-date-ru-parser-formatter';
import { RegistrationService } from './registration-component/registration.service';
import { PassportService } from './passport-component/passport.service';

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
  providers: [
    RegistrationService,
    PassportService,
    {
      provide: NgbDateParserFormatter,
      useClass: NgbDateRuParserFormatter
    }
  ]
})
export class LoginModule { }
