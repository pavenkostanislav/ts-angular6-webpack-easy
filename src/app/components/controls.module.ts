import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TextMaskModule } from 'angular2-text-mask';
import { CheckboxComponent } from './check-box/check-box.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { InputDatePickerComponent } from './input-date-picker/input-date-picker.component';
import { InputPhoneComponent } from './input-phone/input-phone.component';
import { InputTextComponent } from './input-text/input-text.component';
import { TextBoxMaskComponent } from './text-box-mask/text-box-mask.component';
import { TextBoxComponent } from './text-box/text-box.component';
import { InputTextLinkComponent } from './input-text-link/input-text-link.component';

@NgModule({
  imports: [
    FormsModule,
    TextMaskModule,
    CommonModule,
    NgbModule.forRoot()
  ],
  declarations: [
    InputPhoneComponent,
    InputTextComponent,
    CheckboxComponent,
    DatePickerComponent,
    TextBoxComponent,
    TextBoxMaskComponent,
    InputDatePickerComponent,
    InputTextLinkComponent
  ],
  exports: [
    InputPhoneComponent,
    InputTextComponent,
    CheckboxComponent,
    DatePickerComponent,
    TextBoxComponent,
    TextBoxMaskComponent,
    InputDatePickerComponent,
    InputTextLinkComponent
  ]
})
export class ControlModule { }
