import { Injectable, OnInit } from '@angular/core';
import { msgErrors, pattern } from '../../dictionaries';
import { IData, IMap, IPage } from '../../interfaces';
import { ApiService } from '../../services/api.service';
import { PageName } from '../../types';
import { mask } from '../../dictionaries';

export type TabName = 'signin' | 'registration';

@Injectable()
export class AppService {
	public data: IData;
	public patterns: IMap<RegExp>;

	constructor(public api: ApiService) {
		this.patterns = pattern;
	}

	// --- Template ---

	setShow(show = false): IPage {
		return { show };
	}

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

	setCurrentTemplate(current: PageName): void {
		if (this.currentTemplate) { this.templats[this.currentTemplate].show = false; }
		this.templats[current].show = true;
		this.currentTemplate = current;
	}

	// --- Template ---

	// --- Tab ---

	public currentTabs: TabName;

	setTabsShow(current: TabName): void {
		this.currentTabs = current;
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