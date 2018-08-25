export interface IRequestPut {
    account: {
        birthday: string
    },
    passport: {
        docSerial: string,
        docNumber: string,
        docIssueDate: string,
        docDepartmentCode: string,
        docDepartment: string,
        consentUseSimpleSignature: boolean,
        consentUseSimpleSignatureSms: string
    },
    condition: {
        consentBkiRequestB1: boolean,
        consentProcessPersDataB1: boolean
    },
    account_id: number
}