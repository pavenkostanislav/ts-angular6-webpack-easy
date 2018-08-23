import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { msgErrors } from '../../../dictionaries';
import { IRegistrationForm, IUserPost, IUserPut } from '../../../interfaces';
import { AppService } from '../../app-component/app.service';

@Injectable()
export class RegistrationService {
	constructor(private sys: AppService) { }

	async createUser(account: IRegistrationForm, funSuccess: any): Promise<void> {
		if (account) {
			return Promise.reject(msgErrors['404']);
		}
		this.sys.data.registrationState = { account };
		this.sys.log('старт 1.4.1_createUser');

		const userPost: IUserPost = {
			firstName: this.sys.data.registrationState.account.firstName,
			lastName: this.sys.data.registrationState.account.lastName,
			patronymic: this.sys.data.registrationState.account.patronymic,
			phoneMobile: this.sys.data.registrationState.account.phoneMobile,
			email: this.sys.data.registrationState.account.email,
			conditionPassed: this.sys.data.registrationState.account.conditionPassed,
			birthday: this.sys.data.registrationState.account.birthday
		};
		const user = {
			userPost
		}
		this.sys.data.api = {
			user
		};
		Promise.resolve(this.sys.restJsonRequestOnlineApproval('POST', '/user/user', this.sys.data.api.user.userPost, null, funSuccess));
	};
	async updateUser(account: IRegistrationForm): Promise<void> {
		if (account) {
			return Promise.reject(msgErrors['404']);
		}
		this.sys.data.registrationState = { account };
		this.sys.log('старт 1.4.1_updateUser');
		const userPut: IUserPut = {
			account: {
				birthday: this.sys.data.registrationState.account.birthday
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
		this.sys.data.api = {
			user
		};
		Promise.resolve(this.sys.restJsonRequestOnlineApproval('PUT', '/user/user', JSON.stringify(this.sys.data.api.user.userPut), null, this.checkApplication));
	};

	//1.4.1 (4)
	checkApplication = (response: any, funSuccess: any) => {
		this.sys.log('старт 1.4.1_checkApplication');
		var pHttpParams = new HttpParams().set('timeWait', this.sys.timeWait);
		this.sys.restJsonRequestOnlineApproval('GET', '/user/checkApplication', {}, pHttpParams, this.goToRegistrationFormSecondPage);
	}

	//1.4.1 (5)
	goToRegistrationFormSecondPage = async (response: any, funSuccess: any) => {
		this.sys.log('старт 1.4.1_fun_5');
		if (response['can_create_application_flag'] == false) { this.sys.funErrorViewUser(response['can_create_application_message']); }
		else {
			//перейти на вторую форму регистрации
			this.sys.nextPage('passport');
		}
	}
}