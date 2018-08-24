import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TabComponent } from './tabs/tab/tab.component';
import { TabsComponent } from './tabs/tabs.component';
import { InputPhoneComponent } from './input-phone/input-phone.component';
import { FormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';

@NgModule({
  imports: [
    FormsModule,
    TextMaskModule,
    CommonModule,
    NgbModule.forRoot()
  ],
  declarations: [
    TabComponent,
    TabsComponent,
    InputPhoneComponent
  ],
  exports: [
    TabComponent,
    TabsComponent,
    InputPhoneComponent
  ]
})
export class ControlModule { }
