import { Component, ViewEncapsulation, EventEmitter, Output, Input } from '@angular/core';
import { AppService } from '../../views/app-component/app.service';
import { TextBoxComponent } from '../text-box/text-box.component';
@Component({
  moduleId: module.id,
  encapsulation: ViewEncapsulation.None,
  selector: 'input-password',
  templateUrl: 'input-password.component.html'
})
export class InputPasswordComponent extends TextBoxComponent {

  linkName: string;

  @Output() onClick = new EventEmitter<string>();

  constructor(appSrv: AppService) {
    super(appSrv);
    this.title = 'Пароль';
    this.linkName   = 'забыли?';
  }

  onClickLink(e: string) {
    this.onClick.emit(e);
  }
}
