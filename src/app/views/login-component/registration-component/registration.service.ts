import { Injectable } from '@angular/core';
import { IRegistrationForm, IRequestPost, IRequestPut, IUserResponse } from '../../../interfaces';
import { AppService } from '../../app-component/app.service';

@Injectable()
export class RegistrationService {
	constructor(private appSrv: AppService) { }

	async createUser(account: IRegistrationForm): Promise<void> {
		this.appSrv.api.log.debug('service', '1.4.1', 'Вызывается сервис /user/user, метод POST с передачей параметров в теле запроса');
		if (!account) {
			return Promise.reject(this.appSrv.getMsgErrors('noMessage'));
		}
		this.appSrv.data = {
			registration: {
				account
			}
		};

		const requestPost: IRequestPost = {
			firstName: this.appSrv.data.registration.account.firstName,
			lastName: this.appSrv.data.registration.account.lastName,
			patronymic: this.appSrv.data.registration.account.patronymic,
			phoneMobile: this.appSrv.data.registration.account.phoneMobile,
			email: this.appSrv.data.registration.account.email,
			conditionPassed: this.appSrv.data.registration.account.conditionPassed
		};
		const res = await this.appSrv.api.post<IUserResponse>('user/user', requestPost);
		if (res && res.account_id > 0) {
			this.appSrv.api.log.debug('service', '1.4.1 (2)', 'Получаем из ответа значение account_id, сохраняем на клиенте');
			this.appSrv.data.registration.account.account_id = res.account_id;
			await this.updateUserBirthday(this.appSrv.data.registration.account);
		} else {
			this.appSrv.api.log.error('service', '1.4.1 (1)', 'Выводится ошибка, выполнение прерывается');
			this.appSrv.showError(res);
			return Promise.reject(this.appSrv.getMsgErrors('noMessage'));
		}
	};
	async updateUserBirthday(account: IRegistrationForm): Promise<void> {
		this.appSrv.api.log.debug('service', '1.4.1 (3)', 'Вызывается сервис изменения данных пользователя /user/user, метод PUT с передачей параметров account_id и birthday в теле запроса');
		this.appSrv.data.registration = { account };
		const requestPut: IRequestPut = {
			account: {
				birthday: this.appSrv.data.registration.account.birthday
			},
			account_id: this.appSrv.data.registration.account.account_id
		};

		await this.appSrv.api.put<void>('user/user', requestPut);

		this.appSrv.api.log.debug('service', '1.4.1 (4)', 'Вызывается сервис проверки возможности создания анкеты для клиента /user/checkApplication');
		await this.checkApplication();
	};
	async checkApplication(): Promise<void> {
		this.appSrv.api.log.debug('service', '1.4.1 (3)', 'Вызывается сервис изменения данных пользователя /user/user, метод PUT с передачей параметров account_id и birthday в теле запроса');

		const timeWait = this.appSrv.api.config.environment.timeWait;
		const res = await this.appSrv.api.get<any>('user/user', { timeWait });
		if (res['can_create_application_flag'] == false) {
			this.appSrv.api.log.error('service', '1.4.1 (3)', 'Выводится ошибка, выполнение прерывается');
			this.appSrv.showError(res['can_create_application_message']);
			return Promise.reject(this.appSrv.getMsgErrors('noMessage'));
		}
		this.appSrv.nextPage('passport');
	};
}