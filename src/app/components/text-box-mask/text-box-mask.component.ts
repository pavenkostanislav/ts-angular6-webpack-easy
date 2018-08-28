import { Component, Input, ViewEncapsulation } from '@angular/core';
import { TextBoxComponent } from '../text-box/text-box.component';
import { AppService } from '../../views/app-component/app.service';
@Component({
  moduleId: module.id,
  encapsulation: ViewEncapsulation.None,
  selector: 'text-box-mask',
  templateUrl: 'text-box-mask.component.html'
})
export class TextBoxMaskComponent extends TextBoxComponent {
  @Input() title = '';
  @Input() placeholder = '';
  @Input() textMaskName: string;

  constructor(private appSrv: AppService) {
    super(appSrv);
  }

  getMask = () => this.appSrv.getMasks(this.textMaskName);
}
