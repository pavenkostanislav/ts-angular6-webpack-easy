import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { AppService } from '../../app-component/app.service';
@Component({
  moduleId: module.id,
  encapsulation: ViewEncapsulation.None,
  selector: 'menu-component',
  templateUrl: 'menu.component.html'
})
export class MenuComponent {}
