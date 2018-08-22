import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { SysService } from './services/sys.service';

@Component({
	selector: 'app-component',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
	constructor(public sys: SysService) { };

	ngOnInit() {
		//Скрываем страницы
	}
}