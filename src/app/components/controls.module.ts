import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TextMaskModule } from 'angular2-text-mask';
import { CheckboxComponent } from './check-box/check-box.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { InputDateComponent } from './input-date/input-date.component';
import { InputPhoneComponent } from './input-phone/input-phone.component';
import { InputTextBoxComponent } from './input-text-box/input-text-box.component';
import { InputTextComponent } from './input-text/input-text.component';
import { TabComponent } from './tabs/tab/tab.component';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  imports: [
    FormsModule,
    TextMaskModule,
    CommonModule,
    NgbModule.forRoot()
  ],
  declarations: [
    TabComponent,
    TabsComponent,
    InputPhoneComponent,
    InputTextComponent,
    CheckboxComponent,
    InputDateComponent,
    DatePickerComponent,
    InputTextBoxComponent
  ],
  exports: [
    TabComponent,
    TabsComponent,
    InputPhoneComponent,
    InputTextComponent,
    CheckboxComponent,
    InputDateComponent,
    DatePickerComponent,
    InputTextBoxComponent
  ]
})
export class ControlModule { }
