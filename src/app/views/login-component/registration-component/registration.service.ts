import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IRegistrationForm, IRequestPost, IRequestPut, IUserResponse } from '../../../interfaces';
import { AppService } from '../../app-component/app.service';

@Injectable()
export class RegistrationService {
	constructor(private appSrv: AppService) { }

	async createUser(account: IRegistrationForm, funSuccess: any): Promise<void> {
		if (!account) {
			return Promise.reject(this.appSrv.getMsgErrors('404'));
		}
		this.appSrv.data = {
			registration: {
				account
			}
		};
		this.appSrv.log('старт 1.4.1_createUser');

		const requestPost: IRequestPost = {
			firstName: this.appSrv.data.registration.account.firstName,
			lastName: this.appSrv.data.registration.account.lastName,
			patronymic: this.appSrv.data.registration.account.patronymic,
			phoneMobile: this.appSrv.data.registration.account.phoneMobile,
			email: this.appSrv.data.registration.account.email,
			conditionPassed: this.appSrv.data.registration.account.conditionPassed
		};
		this.appSrv.data.api = {
			user: {
				requestPost
			}
		};
		this.appSrv.data.api.user.resposePost = await this.appSrv.api.post<IUserResponse>('user/user', this.appSrv.data.api.user.requestPost);
		//Promise.resolve(this.appSrv.restJsonRequestOnlineApproval('POST', '/user/user', this.appSrv.data.api.user.userPost, null, funSuccess));
	};
	async updateUser(account: IRegistrationForm): Promise<void> {
		if (account) {
			return Promise.reject(this.appSrv.getMsgErrors('404'));
		}
		this.appSrv.data.registration = { account };
		this.appSrv.log('старт 1.4.1_updateUser');
		const requestPut: IRequestPut = {
			account: {
				birthday: this.appSrv.data.registration.account.birthday
			},
			passport: {
				docSerial: "string",
				docNumber: "string",
				docIssueDate: "string",
				docDepartmentCode: "string",
				docDepartment: "string",
				consentUseSimpleSignature: true,
				consentUseSimpleSignatureSms: "string"
			},
			condition: {
				consentBkiRequestB1: true,
				consentProcessPersDataB1: true
			},
			account_id: 0
		};
		this.appSrv.data.api = {
			user: {
				requestPut
			}
		};
		Promise.resolve(this.appSrv.restJsonRequestOnlineApproval('PUT', '/user/user', JSON.stringify(this.appSrv.data.api.user.requestPut), null, this.checkApplication));
	};

	//1.4.1 (4)
	checkApplication = (response: any, funSuccess: any) => {
		this.appSrv.log('старт 1.4.1_checkApplication');
		var pHttpParams = new HttpParams().set('timeWait', this.appSrv.timeWait);
		this.appSrv.restJsonRequestOnlineApproval('GET', '/user/checkApplication', {}, pHttpParams, this.goToRegistrationFormSecondPage);
	}

	//1.4.1 (5)
	goToRegistrationFormSecondPage = async (response: any, funSuccess: any) => {
		this.appSrv.log('старт 1.4.1_fun_5');
		if (response['can_create_application_flag'] == false) { this.appSrv.funErrorViewUser(response['can_create_application_message']); }
		else {
			//перейти на вторую форму регистрации
			this.appSrv.nextPage('passport');
		}
	}
}