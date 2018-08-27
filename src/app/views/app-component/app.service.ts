import { Injectable } from '@angular/core';
import { msgErrors } from '../../dictionaries';
import { IData, ILogger, IMap, IPage, IConfig } from '../../interfaces';
import { ApiService } from '../../services/api.service';
import { ConfigService } from '../../services/config.service';
import { getBunyan } from '../../tools/getBunyan';
import { Page } from '../../types';

@Injectable()
export class AppService {
	public timeWait: string = '33';

	public data: IData;

	public log: ILogger;


	defaultPage(show = false): IPage {
		return { show };
	}

	public pages: IMap<IPage> = {
		'login': this.defaultPage(),
		'passport': this.defaultPage(),
		'registration': this.defaultPage()
	};

	private lastPage: Page = null;
	public config: IConfig;
	constructor(
		public api: ApiService,
		configSrv: ConfigService
	) {
		this.config = configSrv.getConfig();
		this.log = getBunyan(this.config);
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