import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { AppService, GridSize } from './app.service';
import { BehaviorSubject } from 'rxjs';

@Component({
	selector: 'app-component',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	host: {
	  '(window:resize)': 'onResize($event)'
	},
	encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
	constructor(public appSrv: AppService) { };

	ngOnInit() {
		this.appSrv.setCurrentTemplate('registration');
		
	this._gridSize.asObservable().subscribe(
		(gridSize: GridSize) => { this.appSrv.GridSize = gridSize; }
	  );
	}

	
	// --- Grid ---	

	private _gridSize = new BehaviorSubject<GridSize>('lg');
	
	initGridSize(width: number): void {
		if (width < 320) {
			this._gridSize.next('sm');
		}
		if (width < 1200) {
			this._gridSize.next('lg');
		}
		if (width >= 1600) {
			this._gridSize.next('xl');
		}
	}
	
	onResize(event: any) {
		this.initGridSize(event.target.innerWidth);
	}
	// --- Grid ---	
}