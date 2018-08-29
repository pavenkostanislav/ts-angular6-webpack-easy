import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { AppService } from '../../views/app-component/app.service';
import { TextBoxComponent } from '../text-box/text-box.component';
@Component({
  moduleId: module.id,
  encapsulation: ViewEncapsulation.None,
  selector: 'input-text-link',
  templateUrl: 'input-text-link.component.html'
})
export class InputTextComponent extends TextBoxComponent {
  constructor(appSrv: AppService) {
    super(appSrv);
  }
}
