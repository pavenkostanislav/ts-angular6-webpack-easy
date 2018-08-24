import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IRegistrationForm, IUserPost, IUserPut } from '../../../interfaces';
import { AppService } from '../../app-component/app.service';

@Injectable()
export class RegistrationService {
	constructor(private appSrv: AppService) { }

	async createUser(account: IRegistrationForm, funSuccess: any): Promise<void> {
		if (account) {
			return Promise.reject(this.appSrv.getMsgErrors('404'));
		}
		this.appSrv.data.registrationState = { account };
		this.appSrv.log('старт 1.4.1_createUser');

		const userPost: IUserPost = {
			firstName: this.appSrv.data.registrationState.account.firstName,
			lastName: this.appSrv.data.registrationState.account.lastName,
			patronymic: this.appSrv.data.registrationState.account.patronymic,
			phoneMobile: this.appSrv.data.registrationState.account.phoneMobile,
			email: this.appSrv.data.registrationState.account.email,
			conditionPassed: this.appSrv.data.registrationState.account.conditionPassed,
			birthday: this.appSrv.data.registrationState.account.birthday
		};
		const user = {
			userPost
		}
		this.appSrv.data.api = {
			user
		};
		Promise.resolve(this.appSrv.restJsonRequestOnlineApproval('POST', '/user/user', this.appSrv.data.api.user.userPost, null, funSuccess));
	};
	async updateUser(account: IRegistrationForm): Promise<void> {
		if (account) {
			return Promise.reject(this.appSrv.getMsgErrors('404'));
		}
		this.appSrv.data.registrationState = { account };
		this.appSrv.log('старт 1.4.1_updateUser');
		const userPut: IUserPut = {
			account: {
				birthday: this.appSrv.data.registrationState.account.birthday
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
		const user = {
			userPut
		}
		this.appSrv.data.api = {
			user
		};
		Promise.resolve(this.appSrv.restJsonRequestOnlineApproval('PUT', '/user/user', JSON.stringify(this.appSrv.data.api.user.userPut), null, this.checkApplication));
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