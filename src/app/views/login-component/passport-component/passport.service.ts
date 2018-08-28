import { Injectable } from '@angular/core';
import { AppService } from '../../app-component/app.service';

@Injectable()
export class PassportService {
	constructor(private appSrv: AppService) { }
}