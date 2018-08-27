export interface IPassportForm {
	passport: {
		docSerial: string;
		docNumber: string;
		docIssueDate: string;
		docDepartmentCode: string;
		docDepartment: string;
		consentUseSimpleSignature: true;
		consentUseSimpleSignatureSms: string;
	};
	condition: {
		consentBkiRequestB1: boolean;
		consentProcessPersDataB1: boolean;
	};
	account_id: number;
}