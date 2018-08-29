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
  @Input() textMaskName: string;
  @Input() unMackRegExp: RegExp;

  constructor(private appSrv: AppService) {
    super(appSrv);
  }

  getMask = (): any[] => this.appSrv.getMasks(this.textMaskName);

  unMask = (val: string): string => {
    return val.replace(this.unMackRegExp, '');
  }

  onNgModelChange(value: string) {
    if (this.unMackRegExp) {
      this.textControl.setValue(this.unMask(value));
    }
    this.onChanged.emit(this.textControl);
  }

}
