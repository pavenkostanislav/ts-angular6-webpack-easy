import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { mask, msgErrors, pattern } from '../../dictionaries';
import { IData, IMap, IPage } from '../../interfaces';
import { ApiService } from '../../services/api.service';
import { PageName } from '../../types';

export type TabName = 'login/signin' | 'login/registration';

@Injectable()
export class AppService {
	public data: IData;
	public patterns: IMap<RegExp>;

	constructor(public api: ApiService, private router: Router) {
		this.patterns = pattern;
	}

	// --- Template ---

	initPage(show = false): IPage {
		return { show };
	}

	public templats: IMap<IPage> = {
		'passport': this.initPage(),
		'registration': this.initPage()
	};

	private currentTemplate: PageName;

	getCurrentTemplateShow(): string {
		return this.currentTemplate;
	}

	getTemplate(name: string): IPage {
		return this.templats[name];
	}

	setCurrentTemplate(current: PageName): void {
		if (this.currentTemplate) { this.templats[this.currentTemplate].show = false; }
		this.templats[current].show = true;
		this.currentTemplate = current;
	}

	// --- Template ---

	// --- Tab ---

	currentTabs: TabName;

	async setCurrentTab(current: TabName): Promise<void> {
		this.currentTabs = current;
		
		window.location.href = `${this.currentTabs}`;
		//#todo
		//const res = await this.router.navigateByUrl(`${this.currentTabs}`);
		//if(!res) {
		//	this.showError(res);
		//}
	}

	// --- Tab ---

	// --- Message ---

	getMsgErrors(name: string) {
		return msgErrors[name];
	}

	// --- Message ---

	// --- Mask ---

	getMasks(name: string): any[] {
		return mask[name] ? mask[name] : [];
	}

	// --- Mask ---

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