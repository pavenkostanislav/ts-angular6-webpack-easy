import { IMap } from '../interfaces';
export const mask: IMap<any[]> = {
	'user.docSerial': [/\d/, /\d/, ' ', /\d/, /\d/],
	'user.phone': ['+', '7', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
};

// export function getMaskNumbers(str: string):any[] {
//     return [
//         ...Array(str.length).fill(/^[+0-9-(). ]*$/)
//     ];
// }
// 
// export function getMaskStrings(str: string):any[] {
//     return [
//         ...Array(str.length).fill(/[_A-Za-z0-9-\+]/)
//     ];
// }