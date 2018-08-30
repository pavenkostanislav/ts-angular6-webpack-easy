import { Component, ViewEncapsulation } from '@angular/core';
import { AppService, GridSize } from '../app.service';

@Component({
  moduleId: module.id,
  encapsulation: ViewEncapsulation.None,
  selector: 'menu-component',
  templateUrl: 'menu.component.html'
})
export class MenuComponent {

  gridSize: GridSize = 'lg';

  constructor(private appSrv: AppService) { }

  ngOnInit() {
    this.appSrv.GridSize.subscribe(
      (res: any) => { this.gridSize = res; }
    );
  }
}
