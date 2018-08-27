import { Injectable } from '@angular/core';
import { msgErrors, pattern } from '../../dictionaries';
import { IData, IMap, IPage } from '../../interfaces';
import { ApiService } from '../../services/api.service';
import { Page } from '../../types';
import { mask } from '../../dictionaries/mask.dictonary';

@Injectable()
export class AppService {
	public data: IData;
	public patterns: IMap<RegExp>;

	defaultPage(show = false): IPage {
		return { show };
	}
	public pages: IMap<IPage> = {
		'login': this.defaultPage(),
		'passport': this.defaultPage(),
		'registration': this.defaultPage()
	};

	private lastPage: Page = null;
	constructor(public api: ApiService) { 
		this.patterns = pattern;
	}

	getMsgErrors(name: string) {
		return msgErrors[name];
	}

	getMasks(name: string): any[] {
		return mask[name];
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
		this.api.log.error('service', '1.3', 'Обработка ошибок');
		if (arg.error_code && arg.error_message) {
			alert(arg.error_message);
		}
		else {
			alert(this.getMsgErrors('noMessage'));
		}
	}
}