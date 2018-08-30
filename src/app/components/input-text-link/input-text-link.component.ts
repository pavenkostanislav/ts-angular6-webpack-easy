import { Component, ViewEncapsulation, EventEmitter, Output, Input } from '@angular/core';
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
  @Input("linkName") linkName: string;
  @Output() onClick = new EventEmitter<string>();

  onClickLink(e: string) {
    this.onClick.emit(e);
  }
}
