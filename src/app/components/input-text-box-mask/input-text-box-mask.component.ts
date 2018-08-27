import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { AppService } from '../../views/app-component/app.service';
@Component({
  moduleId: module.id,
  encapsulation: ViewEncapsulation.None,
  selector: 'input-text-box-mask',
  templateUrl: 'input-text-box-mask.component.html'
})
export class InputTextBoxMaskComponent {
  @Input() title = '';
  @Input() placeholder = '';
  @Input() textControl: AbstractControl;
  @Input() textMaskName: string;


  @Output() onChanged = new EventEmitter<AbstractControl>();

  focused: boolean = true;
  errorMessage: string;

  constructor(private appSrv: AppService) {
    this.errorMessage = appSrv.getMsgErrors('notValidValue');
  }
  
  getMask = () => this.appSrv.getMasks(this.textMaskName);

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
