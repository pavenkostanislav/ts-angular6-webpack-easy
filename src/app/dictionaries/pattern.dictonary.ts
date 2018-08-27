import { IMap } from '../interfaces';
export const pattern: IMap<RegExp> = {
	'user.lastName': /[А-яЁё][-А-яЁё]+/,
	'user.firstName': /[А-яЁё][-А-яЁё]+/,
	'user.patronymic': /^\-|[А-яЁё][-А-яЁё]+$/,
	'user.phoneMobile': /^[0-9]{10}$/,
	'user.email': /^[_A-Za-z0-9-\+]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/,
	'user.birthday': /([0-2][0-9]|3[0-1])\.(0[1-9]|1[0-2])\.[0-9]{4}/,
	'user.conditionPassed': /^(true|1)$/,
	'docSerial': /([0-9]{2})\s([0-9]{2})/,
	'docNumber': /([0-9]{6})/,
	'docIssueDate': /([0-2][0-9]|3[0-1])\.(0[1-9]|1[0-2])\.[0-9]{4}/,
	'docDepartmentCode': /([0-9]{3})\-([0-9]{3})/,
	'consentUseSimpleSignature': /^(true|1)$/,
	'consentUseSimpleSignatureSms': /([0-9]{4})/,
	'consentBkiRequestB1': /^(true|1)$/,
	'consentProcessPersDataB1': /^(true|1)$/,
};