import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { AppService } from '../../app-component/app.service';
import { generateTestAccount } from '../../../../../spec/generateTestData';
import { pattern } from '../../../dictionaries';
import { RegistrationService } from '../registration-component/registration.service';

@Component({
    selector: 'passport-component',
    templateUrl: './passport.component.html',
    styleUrls: ['./passport.component.scss']
})
export class PassportComponent implements OnInit {
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

	save = async () => {};
	
	changeValue = (title: string, control: AbstractControl) => this.form.get(title).setValue(control.value);
}
