import { Component, Input, ViewEncapsulation } from '@angular/core';
import { TextBoxComponent } from '../text-box/text-box.component';
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
}
