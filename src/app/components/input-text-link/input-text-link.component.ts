import { Component, ViewEncapsulation } from '@angular/core';
import { AppService } from '../../views/app-component/app.service';
import { TextBoxMaskComponent } from '../text-box-mask/text-box-mask.component';
@Component({
  moduleId: module.id,
  encapsulation: ViewEncapsulation.None,
  selector: 'input-text-link',
  templateUrl: 'input-text-link.component.html'
})
export class InputTextLinkComponent extends TextBoxMaskComponent {
  constructor(appSrv: AppService) {
    super(appSrv);
  }
}
