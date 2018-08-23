import { HttpClient, HttpEventType, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { IData, IPage, IMap } from '../../interfaces';
import { HttpMethod, Page } from '../../types';

@Injectable()
export class AppService {
	public serviceUrl: any = 'https://online-auto.rusfinance.ru/OnlineApproval/api';
	//public serviceUrl:any='http://rbib-it1:8089';		
	public timeWait: string = '33';
	public data: IData;

	private defaultPage(show = false): IPage {
		return { show };
	}
	public pages: IMap<IPage> = {
		'login': this.defaultPage(),
		'passport': this.defaultPage(),
		'registration': this.defaultPage()
	};
	private lastPage: Page = null;

	constructor(private http: HttpClient) {}

	nextPage(next: Page): void {
		if (this.lastPage) { this.pages[this.lastPage].show = false; }
		this.pages[next].show = true;
		this.lastPage = next;
	}

	//--------------------------------------------------------------------communication user	
	funErrorViewUser = (arg: string) => {
		alert(arg);
	}
	//--------------------------------------------------------------------call backend	
	restJsonRequestOnlineApproval(method: HttpMethod, url: string, data: any, pHttpParams: any, funSuccess: any): void {
		this.restJsonRequest(method, this.serviceUrl + url, data, pHttpParams, true, funSuccess);
	}

	restJsonRequest(method: HttpMethod, url: string, data: any, pHttpParams: any, withCredentials: boolean, funSuccess: any): void {
		this.log(data, "OK", "запрос " + method + " на " + url);

		if (pHttpParams == null) { pHttpParams = new HttpParams(); }

		const req = new HttpRequest(method, url, data, { headers: new HttpHeaders().set('Content-Type', 'application/json'), params: pHttpParams, "withCredentials": withCredentials });

		//console.log("перед this.http.request(req)");
		this.http.request(req).subscribe(
			event => {
				//console.log("какой-то event", event);
				if (event.type == HttpEventType.Response) {
					this.debug(event.body, "запрос выполнился успешно")
					if (funSuccess != null) {
						funSuccess(event.body, null);
					}
				}
				if (event.type == HttpEventType.ResponseHeader) {
					console.log('header');
					console.log(event.headers);
				}
			},
			(error: any) => {	/*console.log(error.ok);
								console.log(error.status);
								console.log(error.statusText);*/
				this.log(error, "ERROR", "запрос выполнился с ошибкой статус=" + error.status + " текст ответа сервера=" + error.statusText);
				var eUserText: string = error.message;
				if (error.error["error_code"] != undefined) { eUserText = error.error["error_message"] }
				this.funErrorViewUser(eUserText);
			}
		);

		//console.log("ПОСЛЕ this.http.request(req)");		
	}

	//--------------------------------------------------------------------system	
	log(message: any, status: string = "OK", hint?: string): void {
		var d = new Date();
		var sd = '';
		try { sd = d.toISOString(); } catch (e) { sd = d.toUTCString(); }//for IE8

		if (hint == undefined) { hint = ''; }
		var s = sd + ' : ' + status + ' : ' + hint;
		console.log(s, message);
	}

	debug(message: any, hint?: string): void {
		/*if (hint==undefined) {console.log(message);}
		else{
			console.log(hint, message);
		}*/
		this.log(message, "DEBUG", hint);
	}
}