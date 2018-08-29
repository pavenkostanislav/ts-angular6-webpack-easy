import { Component, ViewEncapsulation } from '@angular/core';
import { AppService } from '../../views/app-component/app.service';
import { TextBoxComponent } from '../text-box/text-box.component';
@Component({
  moduleId: module.id,
  encapsulation: ViewEncapsulation.None,
  selector: 'input-text-link',
  templateUrl: 'input-text-link.component.html'
})
export class InputTextLinkComponent extends TextBoxComponent {
  constructor(appSrv: AppService) {
    super(appSrv);
  }
}
