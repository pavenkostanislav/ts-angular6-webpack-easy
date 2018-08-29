import { IPassportForm } from '../src/app/interfaces';
export const getPassportData = (): IPassportForm => {
	return {
		docSerial: '00 00',
		docNumber: '000000',
		docIssueDate: '01.01.1999',
		docDepartmentCode: '000-000',
		docDepartment: 'Штаб-квартира ШтЫрлица',
		consentUseSimpleSignature: true,
		consentUseSimpleSignatureSms: '',
		consentBkiRequestB1: true,
		consentProcessPersDataB1: true,
		account_id: 0
	};
}