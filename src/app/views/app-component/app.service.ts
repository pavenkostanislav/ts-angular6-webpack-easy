import { Injectable } from '@angular/core';
import { msgErrors, pattern } from '../../dictionaries';
import { IData, IMap, IPage } from '../../interfaces';
import { ApiService } from '../../services/api.service';
import { PageName } from '../../types';
import { mask } from '../../dictionaries';

export type TabName = 'signin' |  'registration';

@Injectable()
export class AppService {
	public data: IData;
	public patterns: IMap<RegExp>;

	setShow(show = false): IPage {
		return { show };
	}
	
	// --- Template ---

	public templats: IMap<IPage> = {
		'passport': this.setShow(),
		'registration': this.setShow()
	};

	private currentTemplate: PageName;

	getCurrentTemplateShow(): string {
		return this.currentTemplate;
	}

	getTemplate(name: string): IPage {
		return this.templats[name];
	}

	setCurrentTemplate(templateName: PageName): void {
		if (this.currentTemplate) { this.templats[this.currentTemplate].show = false; }
		this.templats[templateName].show = true;
		this.currentTemplate = templateName;
	}

	// --- Template ---
	
	// --- Tab ---

	public tabs: IMap<IPage> = {
		'signin': this.setShow(),
		'registration': this.setShow()
	};

	getTabsShow(name: string): boolean {
		return this.tabs[name].show;
	}
	
	private currentTabs: TabName;

	setTabsShow(next: TabName): void {
		if (this.currentTabs) { this.templats[this.currentTabs].show = false; }
		this.templats[next].show = true;
		this.currentTabs = next;
	}

	// --- Tab ---

	constructor(public api: ApiService) { 
		this.patterns = pattern;
	}

	getMsgErrors(name: string) {
		return msgErrors[name];
	}

	getMasks(name: string): any[] {
		return mask[name] ? mask[name] : [];
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