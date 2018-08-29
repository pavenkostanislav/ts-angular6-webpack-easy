import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators, ValidationErrors } from '@angular/forms';
import { AppService } from '../../app-component/app.service';
import { PassportService } from './passport.service';

@Component({
	selector: 'passport-component',
	templateUrl: './passport.component.html',
	styleUrls: ['./passport.component.scss']
})
export class PassportComponent implements OnInit {
	form: FormGroup;

	constructor(public appSrv: AppService,
		private pswSrv: PassportService,
		private _formBuilder: FormBuilder) { };

	ngOnInit(): void {
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

	confirmTypeCode = async (title: string, control: AbstractControl) => {
		this.appSrv.api.log.debug('view', '1.4.2 (1)', 'Отметка поля «Соглашение об использовании простой электронной подписи»', this.form.value);
		this.form.get(title).setValue(control.value);
		await this.sentSmsCode();
	};
	sentSmsCode = async () => {
		this.appSrv.api.log.debug('view', '1.4.2 (1)', 'Нажатие на ссылку «Выслать повторно»', this.form.value);
		await this.pswSrv.userFactor();
		this.appSrv.api.log.debug('view', '1.4.2 (1)', `valid: ${this.form.valid}`);
	}
	save = async () => {
		this.appSrv.api.log.debug('view', '1.4.1', this.form.value);
		if (this.form.valid) {
			await this.pswSrv.updateUser(this.form.value);
		}
		this.appSrv.api.log.debug('view', '1.4.1', `valid: ${this.form.valid}`);
	};

	changeValue = (title: string, control: AbstractControl) => this.form.get(title).setValue(control.value);

	
}
