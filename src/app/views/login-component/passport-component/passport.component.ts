import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators, ValidationErrors } from '@angular/forms';
import { AppService } from '../../app-component/app.service';

@Component({
	selector: 'passport-component',
	templateUrl: './passport.component.html',
	styleUrls: ['./passport.component.scss']
})
export class PassportComponent implements OnInit {
	form: FormGroup;
	isСonsentUseSimple = false;

	constructor(public appSrv: AppService,
		private _formBuilder: FormBuilder) { };

	ngOnInit(): void {
		// const passportForm: IPassportForm = {
		// 	passport: {
		// 		docSerial: '',
		// 		docNumber: '',
		// 		docIssueDate: '',
		// 		docDepartmentCode: '',
		// 		docDepartment: '',
		// 		consentUseSimpleSignature: true,
		// 		consentUseSimpleSignatureSms: ''
		// 	},
		// 	condition: {
		// 		consentBkiRequestB1: false,
		// 		consentProcessPersDataB1: false
		// 	},
		// 	account_id: this.appSrv.data.registration.account.account_id
		// }
		this.form = this._formBuilder.group({
			docSerial: ['', [Validators.required, Validators.pattern(this.appSrv.patterns['user.docSerial'])]],
			docNumber: ['', [Validators.required, Validators.pattern(this.appSrv.patterns['user.docNumber'])]],
			docIssueDate: ['', [Validators.required, Validators.pattern(this.appSrv.patterns['user.docIssueDate'])]],
			docDepartmentCode: ['', [Validators.required, Validators.pattern(this.appSrv.patterns['user.docDepartmentCode'])]],
			docDepartment: ['', [Validators.required, Validators.maxLength(255)]],
			consentUseSimpleSignature: [false, [Validators.required, Validators.pattern(this.appSrv.patterns['user.consentUseSimpleSignature'])]],
			consentUseSimpleSignatureSms: ['', [Validators.required, Validators.pattern(this.appSrv.patterns['user.consentUseSimpleSignatureSms'])]],
			consentBkiRequestB1: [false, [Validators.required, Validators.pattern(this.appSrv.patterns['user.consentBkiRequestB1'])]],
			consentProcessPersDataB1: [false, [Validators.required, Validators.pattern(this.appSrv.patterns['user.consentProcessPersDataB1'])]]
		});
	}
	// Отметка поля «Соглашение об использовании простой электронной подписи»
	confirmTypeCode = async () => {
		this.appSrv.api.log.debug('view', '1.4.1', this.form.value);
		if (this.form.valid) {
			// #todo service
			/*
				1.	Вызывается сервис /user/factor с параметром confirmTypeCode = “PASSPORT”
				a.	Если статус ответа не 200, выводится ошибка
				2.	Предоставляется возможность ввести sms-код или запросить его повторно
			*/
		}
		this.appSrv.api.log.debug('view', '1.4.1', `valid: ${this.form.valid}`);
	};
	// Нажатие на ссылку «Выслать повторно»
	sendSms = async () => {
		this.appSrv.api.log.debug('view', '1.4.1', this.form.value);
		if (this.form.valid) {
			// #todo service
			/*
				1.	Вызывается сервис /user/factor с параметром confirmTypeCode = “PASSPORT”
				a.	Если статус ответа не 200, выводится ошибка
			*/
		}
		this.appSrv.api.log.debug('view', '1.4.1', `valid: ${this.form.valid}`);
	};
	save = async () => {
		this.appSrv.api.log.debug('view', '1.4.1', this.form.value);
		if (this.form.valid) {
			// #todo service
			/*
				1.	Вызывается сервис изменения данных пользователя /user/user, метод PUT с передачей параметров passport.*, condition.* и account_id в теле запроса
				a.	Если статус ответа не 200, выводится ошибка, выполнение прерывается
				2.	Вызывается сервис проверки возможности создания анкеты для клиента /user/checkApplication
				a.	Если статус ответа не 200, выводится ошибка, выполнение прерывается.
				3.	Получаем из ответа can_create_application_flag и can_create_application_message
				a.	Если can_create_application_flag = false, выводим сообщение из can_create_application_message.
			*/
		}
		this.appSrv.api.log.debug('view', '1.4.1', `valid: ${this.form.valid}`);
	};

	changeValue = (title: string, control: AbstractControl) => this.form.get(title).setValue(control.value);
	changeСonsentUseSimpleSignature = (title: string, control: AbstractControl) => {
		this.isСonsentUseSimple = true;
		this.form.get(title).setValue(control.value);
	};
}
