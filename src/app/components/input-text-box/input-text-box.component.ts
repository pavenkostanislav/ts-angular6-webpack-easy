import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { AppService } from '../../views/app-component/app.service';
@Component({
  moduleId: module.id,
  encapsulation: ViewEncapsulation.None,
  selector: 'input-text-box',
  templateUrl: 'input-text-box.component.html'
})
export class InputTextBoxComponent {
  @Input() textControl: AbstractControl;

  @Output() onChanged = new EventEmitter<AbstractControl>();

  focused: boolean = true;
  errorMessage: string;

  constructor(appSrv: AppService) {
    this.errorMessage = appSrv.getMsgErrors('notValidValue');
  }

  onNgModelChange(value: string) {
    this.onChanged.emit(this.textControl);
  }

  onFocus() {
    this.focused = true;
  }

  onBlur() {
    this.focused = false;
  }
}