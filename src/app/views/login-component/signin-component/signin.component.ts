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
			password: ['', [Validators.required, Validators.maxLength(100), Validators.pattern(this.appSrv.patterns['user.password'])]]
		});
	}

	forgotPassword = () => {}

	submit = async () => {
		this.appSrv.api.log.debug('view', '1.4.3', 'Вызывается сервис изменения данных пользователя /user/login, метод POST с передачей параметров login и password form.value: ', this.form.value);
		this.appSrv.api.log.debug('view', '1.4.3', `valid: ${this.form.valid}`);
		await this.pswSrv.userLogin();
	}

	changeValue = (title: string, control: AbstractControl) => this.form.get(title).setValue(control.value);

	
}
