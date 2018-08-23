import { IRegistrationForm, IRegistrationState, IData } from '../src/app/interfaces';
export function generateTestAccount(): IRegistrationForm {
	let d = new Date();
	let mm = d.getMonth().toString();
	if (mm.length < 2)
		mm = '0' + mm;
	let dd = d.getDate().toString();
	if (dd.length < 2)
		dd = '0' + dd;
	let hh = d.getHours().toString();
	if (hh.length < 2)
		hh = '0' + hh;
	let mi = d.getMinutes().toString();
	if (mi.length < 2)
		mi = '0' + mi;
	let ss = d.getSeconds().toString();
	if (ss.length < 2)
		ss = '0' + ss;
	return {
		account_id: 0,
		lastName: 'Фамилия',
		firstName: 'Имя',
		patronymic: 'Отчество',
		birthday: `16.08.1995`,
		conditionPassed: true,
		phoneMobile: '9' + dd + '0' + hh + mi + ss,
		email: 'Client0_' + mm + dd + hh + mi + ss + '@test.ru',
	};
}