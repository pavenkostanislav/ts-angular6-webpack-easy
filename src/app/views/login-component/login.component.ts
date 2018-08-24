import { Component } from '@angular/core';
import { AppService } from '../app-component/app.service';
import { IMap, IPage } from '../../interfaces';

@Component({
	selector: 'login-component',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent {
	registration: boolean;
	passport: boolean;
	constructor(appSrv: AppService) {
		this.passport = appSrv.getPagesInfo('passport');
		this.registration = appSrv.getPagesInfo('registration');
	}
}

