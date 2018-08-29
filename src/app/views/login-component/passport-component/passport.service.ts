import { Injectable } from '@angular/core';
import { AppService } from '../../app-component/app.service';
import { IPassportForm } from '../../../interfaces';

@Injectable()
export class PassportService {
	constructor(private appSrv: AppService) { }
	async userFactor(): Promise<void> {
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
		const res = await this.appSrv.api.post<any>('user/factor', null, params, headers);
	};

	async updateUser(account: IPassportForm): Promise<void> {
		this.appSrv.api.log.debug('service', '1.4.2 (1-3)', 'Вызывается сервис изменения данных пользователя /user/user, метод PUT с передачей параметров passport.*, condition.* и account_id в теле запроса');
		if (!account) {
			return Promise.reject(this.appSrv.getMsgErrors('noMessage'));
		}

		const params = {
			passport: {
				docSerial: account.docSerial,
				docNumber: account.docNumber,
				docIssueDate: account.docIssueDate,
				docDepartmentCode: account.docDepartmentCode,
				docDepartment: account.docDepartment,
				consentUseSimpleSignature: account.consentUseSimpleSignature,
				consentUseSimpleSignatureSms: account.consentUseSimpleSignatureSms
			},
			condition: {
				consentBkiRequestB1: account.consentBkiRequestB1,
				consentProcessPersDataB1: account.consentProcessPersDataB1
			},
			account_id: this.appSrv.data.registration.account.account_id
		}
		await this.appSrv.api.put<void>('user/user', params);

		this.appSrv.api.log.debug('service', '1.4.2 (1-3)', 'Вызывается сервис проверки возможности создания анкеты для клиента /user/checkApplication');
		await this.checkApplication();
	};

	async checkApplication(): Promise<void> {
		this.appSrv.api.log.debug('service', '1.4.2 (1-3)', 'Вызывается сервис изменения данных пользователя /user/user, метод PUT с передачей параметров account_id и birthday в теле запроса');

		const timeWait = this.appSrv.api.config.environment.timeWait;
		const res = await this.appSrv.api.get<any>('user/user', { timeWait });
		if (res['can_create_application_flag'] == false) {
			this.appSrv.api.log.error('service', '1.4.1 (3)', 'Выводится ошибка, выполнение прерывается');
			this.appSrv.showError(res['can_create_application_message']);
			return Promise.reject(this.appSrv.getMsgErrors('noMessage'));
		}
		this.appSrv.setCurrentTab('login/signin');
	};
}