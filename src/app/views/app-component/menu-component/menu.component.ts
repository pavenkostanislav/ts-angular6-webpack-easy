import { Component, ViewEncapsulation } from '@angular/core';
import { AppService, GridSize } from '../app.service';

@Component({
  moduleId: module.id,
  encapsulation: ViewEncapsulation.None,
  selector: 'menu-component',
  templateUrl: 'menu.component.html'
})
export class MenuComponent {

  gridSize: GridSize;

  constructor(private appSrv: AppService) { 
    this.gridSize = appSrv.GridSize;
  }

}
