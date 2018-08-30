import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getRouteParams } from '../../tools/getRouteParams';
import { AppService } from '../app-component/app.service';

@Component({
	selector: 'login-component',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	activeId: string;
	ngOnInit(): void {
		this.activeId = this.getParamsAslogin(this.route)
	}
	constructor(public appSrv: AppService, private route: ActivatedRoute) { }

	getParamsAslogin(route: ActivatedRoute): string {
		const params = getRouteParams(route);
		return params.activeId;
	}
}