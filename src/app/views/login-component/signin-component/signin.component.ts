import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators, ValidationErrors } from '@angular/forms';
import { AppService } from '../../app-component/app.service';
import { SignInService } from './signin.service';

@Component({
	selector: 'signin-component',
	templateUrl: './signin.component.html',
	styleUrls: ['./signin.component.scss']
})
export class SignInComponent implements OnInit {
	form: FormGroup;

	constructor(public appSrv: AppService,
		private pswSrv: SignInService,
		private _formBuilder: FormBuilder) { };

	ngOnInit(): void {
		this.form = this._formBuilder.group({
			phoneMobile: ['', [Validators.required, Validators.pattern(this.appSrv.patterns['user.phoneMobile'])]],
			password: ['', [Validators.required, Validators.pattern(this.appSrv.patterns['user.password'])]]
		});
	}

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

	
}
