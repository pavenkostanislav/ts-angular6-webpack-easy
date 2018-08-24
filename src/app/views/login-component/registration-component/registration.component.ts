import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { generateTestAccount } from '../../../../../spec/generateTestData';
import { pattern } from '../../../dictionaries';
import { AppService } from '../../app-component/app.service';
import { RegistrationService } from './registration.service';
import { AsyncValidatorFn, FormControl, ValidatorFn } from '@angular/forms';

@Component({
	selector: 'registration-component',
	templateUrl: './registration.component.html',
	styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
	public mask = ['+', '7', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
	unMaskForPhone(val: string): string {
		if (val.indexOf('+7') === 0) { val = val.substr(2, val.length); }
		return val.replace(/\D+/g, '');
	}
	
	public form: FormGroup;

	constructor(public sys: AppService,
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
			conditionPassed: [testAccount.conditionPassed, [Validators.required]]
		});
	}

	//1.4.1 (1)
	createUser = async (response: any, funSuccess: any) => {
		this.sys.nextPage('passport');
		console.log(this.form.value);
		if (this.form.valid) {
			await new RegistrationService(this.sys).createUser(this.form.value, funSuccess);
		}

		console.log(this.form.valid);
	}
	//1.4.1 (2,3)
	updateUser = async (response: any, funSuccess: any) => await new RegistrationService(this.sys).updateUser(this.form.value);
}

