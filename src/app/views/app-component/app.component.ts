import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
	selector: 'app-component',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
	constructor(public appSrv: AppService) { };

	ngOnInit() {
		this.appSrv.setCurrentTemplate('registration');
	}
}