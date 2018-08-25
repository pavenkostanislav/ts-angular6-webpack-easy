import { IRequestPut, IRequestPost, IRegistrationState } from './';

export interface IUserResponse {	
	account_id: string;
}

export interface IData {
	registration: IRegistrationState;
	api?: {
		user: {
			requestPut?: IRequestPut;
			requestPost?: IRequestPost;
			resposePost?: IUserResponse;
		};
	};
};


