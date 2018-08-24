import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { AppService } from '../../views/app-component/app.service';
@Component({
  moduleId: module.id,
  encapsulation: ViewEncapsulation.None,
  selector: 'input-date',
  templateUrl: 'input-date.component.html'
})
export class InputDateComponent {
  @Input()title = 'caption';
  focused: boolean = true;
  getPhoneNumberMask = [/[0-3]/, /\d/, '.', /[0-1]/, /\d/, '.', /[1-2]/, /\d/, /\d/, /\d/];
  errorMessage: string;
  constructor(appSrv: AppService) {
    this.errorMessage = appSrv.getMsgErrors('notValidValue');
  }
  @Input() dateControl: AbstractControl;
  @Output() onChanged = new EventEmitter<AbstractControl>();
  onNgModelChange(value: string) {
    this.dateControl.setValue(value);
    this.onChanged.emit(this.dateControl);
  }

  onFocus() {
    this.focused = true;
  }

  onBlur() {
    this.focused = false;
  }
}
