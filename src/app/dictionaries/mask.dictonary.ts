import { IMap } from '../interfaces';
type Mask = RegExp | string;
export const mask: IMap<Mask[]> = {
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