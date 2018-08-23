import { IUserPut, IUserPost, IRegistrationState } from './';
export interface IData {
	registrationState: IRegistrationState;	
	api?: {
		user?: {
			userPut?: IUserPut;
			userPost?: IUserPost;
		};
	};
};


