export interface IPassportForm {
	docSerial: string;
	docNumber: string;
	docIssueDate: string;
	docDepartmentCode: string;
	docDepartment: string;
	consentUseSimpleSignature: true;
	consentUseSimpleSignatureSms: string;
	consentBkiRequestB1: boolean;
	consentProcessPersDataB1: boolean;
	account_id: number;
}