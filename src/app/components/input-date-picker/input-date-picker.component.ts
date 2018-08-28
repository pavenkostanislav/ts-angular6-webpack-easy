import { Component, ViewEncapsulation } from '@angular/core';
import { DatePickerComponent } from '../date-picker/date-picker.component';

@Component({
  moduleId: module.id,
  encapsulation: ViewEncapsulation.None,
  selector: 'input-date-picker',
  templateUrl: 'input-date-picker.component.html'
})
export class InputDatePickerComponent extends DatePickerComponent {}
