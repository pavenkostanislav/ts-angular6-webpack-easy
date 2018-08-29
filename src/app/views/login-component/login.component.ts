import { Component } from '@angular/core';
import { AppService } from '../app-component/app.service';

@Component({
	selector: 'login-component',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent {
	registration: boolean;
	passport: boolean;
	constructor(public appSrv: AppService) {
		this.passport = appSrv.getTemplateShow('passport');
		this.registration = appSrv.getTemplateShow('registration');
	}
}

