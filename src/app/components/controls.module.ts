import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TabComponent } from './tabs/tab/tab.component';
import { TabsComponent } from './tabs/tabs.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
  ],
  declarations: [
    TabComponent,
    TabsComponent
  ],
  exports: [
    TabComponent,
    TabsComponent
  ]
})
export class ControlModule { }
