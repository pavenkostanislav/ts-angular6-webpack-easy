import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { msgErrors } from '../../dictionaries';
import { IData, IMap, IPage } from '../../interfaces';
import { ApiService } from '../../services/api.service';
import { getBunyan } from '../../tools/getBunyan';
import { Page } from '../../types';
import { Logger } from '../../interfaces';

@Injectable()
export class AppService {
	public serviceUrl: any = 'https://online-auto.rusfinance.ru/OnlineApproval/api';
	//public serviceUrl:any='http://rbib-it1:8089';
	public timeWait: string = '33';

	public data: IData;

	public log: Logger;

	defaultPage(show = false): IPage {
		return { show };
	}

	pages: IMap<IPage> = {
		'login': this.defaultPage(),
		'passport': this.defaultPage(),
		'registration': this.defaultPage()
	};

	private lastPage: Page = null;

	constructor(
		public api: ApiService,
		private http: HttpClient
	) {
		this.log = getBunyan();
	}

	getMsgErrors(name: string) {
		return msgErrors[name];
	}

	getPagesInfo(name: string): boolean {
		return this.pages[name].show;
	}

	nextPage(next: Page): void {
		if (this.lastPage) { this.pages[this.lastPage].show = false; }
		this.pages[next].show = true;
		this.lastPage = next;
	}

	public showError = (arg: any) => {
		this.log.error('service', '1.3', 'Обработка ошибок');
		if (arg.error_code && arg.error_message) {
			alert(arg.error_message);
		}
		else {
			alert(this.getMsgErrors('noMessage'));
		}

	}
}