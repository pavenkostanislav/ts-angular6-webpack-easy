import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { generateTestAccount } from '../../../../../spec/generateTestData';
import { AppService } from '../../app-component/app.service';
import { RegistrationService } from './registration.service';

@Component({
	selector: 'registration-component',
	templateUrl: './registration.component.html',
	styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
	form: FormGroup;

	constructor(public appSrv: AppService,
		private regSrv: RegistrationService,
		private _formBuilder: FormBuilder) { };

	ngOnInit(): void {

		const testAccount = generateTestAccount();

		this.form = this._formBuilder.group({
			lastName: [testAccount.lastName, [Validators.required, Validators.pattern(this.appSrv.patterns['user.lastName'])]],
			firstName: [testAccount.firstName, [Validators.required, Validators.pattern(this.appSrv.patterns['user.firstName'])]],
			patronymic: [testAccount.patronymic, [Validators.required, Validators.pattern(this.appSrv.patterns['user.patronymic'])]],
			phoneMobile: [testAccount.phoneMobile, [Validators.required, Validators.pattern(this.appSrv.patterns['user.phoneMobile'])]],
			email: [testAccount.email, [Validators.required, Validators.pattern(this.appSrv.patterns['user.email'])]],
			birthday: [testAccount.birthday, [Validators.required, Validators.pattern(this.appSrv.patterns['user.birthday'])]],
			conditionPassed: [testAccount.conditionPassed, [Validators.required, Validators.pattern(this.appSrv.patterns['user.conditionPassed'])]]
		});
	}

	createUser = async () => {
		this.appSrv.api.log.debug('view', '1.4.1', this.form.value);
		if (this.form.valid) {
			await this.regSrv.createUser(this.form.value);
		}

		this.appSrv.api.log.debug('view', '1.4.1', `valid: ${this.form.valid}`);
	};

	changeValue = (title: string, control: AbstractControl) => this.form.get(title).setValue(control.value);
}

