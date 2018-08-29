import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../../app-component/app.service';
import { RegistrationService } from './registration.service';
import { getRegistrationData } from '../../../../../spec/getRegistrationData.spec';

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

		const rezistrationTemplate = getRegistrationData();
		this.form = this._formBuilder.group({
			lastName: [rezistrationTemplate.lastName, [Validators.required, Validators.pattern(this.appSrv.patterns['user.lastName'])]],
			firstName: [rezistrationTemplate.firstName, [Validators.required, Validators.pattern(this.appSrv.patterns['user.firstName'])]],
			patronymic: [rezistrationTemplate.patronymic, [Validators.required, Validators.pattern(this.appSrv.patterns['user.patronymic'])]],
			phoneMobile: [rezistrationTemplate.phoneMobile, [Validators.required, Validators.pattern(this.appSrv.patterns['user.phoneMobile'])]],
			email: [rezistrationTemplate.email, [Validators.required, Validators.pattern(this.appSrv.patterns['user.email'])]],
			birthday: [rezistrationTemplate.birthday, [Validators.required, Validators.pattern(this.appSrv.patterns['user.birthday'])]],
			conditionPassed: [rezistrationTemplate.conditionPassed, [Validators.required, Validators.pattern(this.appSrv.patterns['user.conditionPassed'])]]
		});

		// this.form = this._formBuilder.group({
			// lastName: ['', [Validators.required, Validators.pattern(this.appSrv.patterns['user.lastName'])]],
			// firstName: ['', [Validators.required, Validators.pattern(this.appSrv.patterns['user.firstName'])]],
			// patronymic: ['', [Validators.required, Validators.pattern(this.appSrv.patterns['user.patronymic'])]],
			// phoneMobile: ['', [Validators.required, Validators.pattern(this.appSrv.patterns['user.phoneMobile'])]],
			// email: ['', [Validators.required, Validators.pattern(this.appSrv.patterns['user.email'])]],
			// birthday: ['', [Validators.required, Validators.pattern(this.appSrv.patterns['user.birthday'])]],
			// conditionPassed: [false, [Validators.required, Validators.pattern(this.appSrv.patterns['user.conditionPassed'])]]
		// });
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

