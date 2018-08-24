import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { generateTestAccount } from '../../../../../spec/generateTestData';
import { pattern } from '../../../dictionaries';
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
		private _formBuilder: FormBuilder) { };

	ngOnInit(): void {

		const testAccount = generateTestAccount();

		this.form = this._formBuilder.group({
			lastName: [testAccount.lastName, [Validators.required, Validators.pattern(pattern['user.lastName'])]],
			firstName: [testAccount.firstName, [Validators.required, Validators.pattern(pattern['user.firstName'])]],
			patronymic: [testAccount.patronymic, [Validators.required, Validators.pattern(pattern['user.patronymic'])]],
			phoneMobile: [testAccount.phoneMobile, [Validators.required, Validators.pattern(pattern['user.phoneMobile'])]],
			email: [testAccount.email, [Validators.required, Validators.pattern(pattern['user.email'])]],
			birthday: [testAccount.birthday, [Validators.required, Validators.pattern(pattern['user.birthday'])]],
			conditionPassed: [testAccount.conditionPassed, [Validators.required, Validators.pattern(pattern['user.conditionPassed'])]]
		});
	}

	//1.4.1 (1)
	createUser = async (response: any, funSuccess: any) => {
		this.appSrv.nextPage('passport');
		console.log(this.form.value);
		if (this.form.valid) {
			await new RegistrationService(this.appSrv).createUser(this.form.value, funSuccess);
		}

		console.log(this.form.valid);
	}
	//1.4.1 (2,3)
	updateUser = async (response: any, funSuccess: any) => await new RegistrationService(this.appSrv).updateUser(this.form.value);

	changeValue = (title: string, control: AbstractControl) => this.form.get(title).setValue(control.value);
}

