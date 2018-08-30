import { Injectable } from '@angular/core';
import { AppService } from '../../app-component/app.service';

@Injectable()
export class SignInService {
	constructor(private appSrv: AppService) { }
	async userLogin(): Promise<void> {
		this.appSrv.api.log.debug('service', '1.4.2 (1)', 'Вызывается сервис /user/factor с параметром confirmTypeCode = “PASSPORT”');
		if (!this.appSrv.data.registration.account) {
			return Promise.reject(this.appSrv.getMsgErrors('noMessage'));
		}

		const params = {
			phoneNumber: this.appSrv.data.registration.account.phoneMobile,
			confirmTypeCode: 'PASSPORT'
		};

		const headers = {
			'accept': 'application/json;charset=utf-8'
		};
		const res = await this.appSrv.api.post<any>('user/login', null, params, headers);
	};
}