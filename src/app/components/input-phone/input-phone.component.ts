import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { AppService } from '../../views/app-component/app.service';
@Component({
  moduleId: module.id,
  encapsulation: ViewEncapsulation.None,
  selector: 'input-phone',
  templateUrl: 'input-phone.component.html'
})
export class InputPhoneComponent {
  @Input() phoneControl: AbstractControl;

  @Output() onChanged = new EventEmitter<AbstractControl>();

  focused: boolean = true;errorMessage: string;

  constructor(private appSrv: AppService) {
    this.errorMessage = appSrv.getMsgErrors('notValidValue');
  }
  
  getPhoneNumberMask = () => this.appSrv.getMasks('user.phone');

  onNgModelChange(value: string) {
    this.phoneControl.setValue(this.unMask(value));
    this.onChanged.emit(this.phoneControl);
  }

  unMask(val: string): string {
    if (val.indexOf('+7') === 0) { val = val.substr(2, val.length); }
    return val.replace(/\D+/g, '');
  }

  onFocus() {
    this.focused = true;
  }

  onBlur() {
    this.focused = false;
  }
}
