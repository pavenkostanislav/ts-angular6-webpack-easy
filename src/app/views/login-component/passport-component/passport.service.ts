import { Injectable } from '@angular/core';
import { AppService } from '../../app-component/app.service';

@Injectable()
export class PassportService {
	constructor(private appSrv: AppService) { }
	async sentSmsCode(): Promise<void> {
		this.appSrv.api.log.debug('service', '1.4.2 (1)', 'Вызывается сервис /user/factor с параметром confirmTypeCode = “PASSPORT”');
		if (!this.appSrv.data.registration.account) {
			return Promise.reject(this.appSrv.getMsgErrors('noMessage'));
		}

		const requestPost = {
			phoneMobile: this.appSrv.data.registration.account.phoneMobile,
			confirmTypeCode: 'PASSPORT'
		};
		const res = await this.appSrv.api.get<any>('user/factor', requestPost);
		if (res.status !== 200) {
			this.appSrv.api.log.error('service', '1.4.2 (1)', 'Если статус ответа не 200, выводится ошибка');
			this.appSrv.showError(res);
			return Promise.reject(this.appSrv.getMsgErrors('noMessage'));
		}
	};
}