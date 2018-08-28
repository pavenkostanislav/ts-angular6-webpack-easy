import { IMap } from '../interfaces';
export const mask: IMap<any[]> = {
	'user.phone': ['+', '7', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
	'user.docSerial': [/\d/, /\d/, ' ', /\d/, /\d/],
	'user.docNumber': [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/],
	'user.docDepartmentCode': [/\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/],
};

// export function getMaskNumbers(str: string):any[] {
//     return [
//         ...Array(str.length).fill(/^[+0-9-(). ]*$/)
//     ];
// }