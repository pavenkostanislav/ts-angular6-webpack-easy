import { IMap } from '../interfaces';
export const pattern: IMap<RegExp> = {
	'user.lastName': /[А-яЁё][-А-яЁё]+/,
	'user.firstName': /[А-яЁё][-А-яЁё]+/,
	'user.patronymic': /^\-|[А-яЁё][-А-яЁё]+$/,
	'user.phoneMobile': /^[0-9]{10}$/,
	'user.email': /^[_A-Za-z0-9-\+]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/,
	'user.birthday': /([0-2][0-9]|3[0-1])\.(0[1-9]|1[0-2])\.[0-9]{4}/
};