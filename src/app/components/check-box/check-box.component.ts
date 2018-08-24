import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { AppService } from '../../views/app-component/app.service';
@Component({
  moduleId: module.id,
  encapsulation: ViewEncapsulation.None,
  selector: 'check-box',
  templateUrl: 'check-box.component.html'
})
export class CheckboxComponent {
  @Input() checkbox: AbstractControl;

  @Output() onChanged = new EventEmitter<AbstractControl>();

  focused: boolean = true;
  errorMessage: string;

  constructor(appSrv: AppService) {
    this.errorMessage = appSrv.getMsgErrors('notValidValue');
  }

  onNgModelChange(value: string) {
    this.onChanged.emit(this.checkbox);
  }

  onFocus() {
    this.focused = true;
  }

  onBlur() {
    this.focused = false;
  }
}
