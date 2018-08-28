import { Injectable } from '@angular/core';
import { AppService } from '../../app-component/app.service';

@Injectable()
export class SignInService {
	constructor(private appSrv: AppService) { }
}