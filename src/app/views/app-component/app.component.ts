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
			(gridSize: GridSize) => {
				this.appSrv.grid.size = gridSize;
				if (this.appSrv.grid.size === 'sm') {
					this.appSrv.grid.sm = true;
					this.appSrv.grid.lg = false;
					this.appSrv.grid.xl = false;
					return;
				}
				if (this.appSrv.grid.size === 'lg') {
					this.appSrv.grid.sm = false;
					this.appSrv.grid.lg = true;
					this.appSrv.grid.xl = false;
					return;
				}
				if (this.appSrv.grid.size === 'xl') {
					this.appSrv.grid.sm = false;
					this.appSrv.grid.lg = false;
					this.appSrv.grid.xl = true;
					return;
				}
			}
		);
	}


	// --- Grid ---	

	private _gridSize = new BehaviorSubject<GridSize>('lg');

	initGridSize(width: number): void {
		if (width >= 1600) {
			this._gridSize.next('xl');
			return;
		}
		if (width >= 1200) {
			this._gridSize.next('lg');
			return;
		}
		this._gridSize.next('sm');
	}

	onResize(event: any) {
		this.initGridSize(event.target.innerWidth);
	}
	// --- Grid ---	
}