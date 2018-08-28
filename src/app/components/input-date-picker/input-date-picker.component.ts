import { Component, ViewEncapsulation } from '@angular/core';
import { DatePickerComponent } from '../date-picker/date-picker.component';
import { AppService } from '../../views/app-component/app.service';

@Component({
  moduleId: module.id,
  encapsulation: ViewEncapsulation.None,
  selector: 'input-date-picker',
  templateUrl: 'input-date-picker.component.html'
})
export class InputDatePickerComponent extends DatePickerComponent {
  constructor(appSrv: AppService) {
    super(appSrv);
  }
}
