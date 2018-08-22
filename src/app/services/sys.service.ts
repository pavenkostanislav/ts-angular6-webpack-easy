import { HttpClient, HttpEventType, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IData, IState, IShow } from '../interfaces';
import { HttpMethod } from '../types';

@Injectable()
export class SysService {
	public serviceUrl: any = 'https://postman-echo.com/';
	public data: IData;
	public pages: IState;

	constructor(private http: HttpClient) { };

	showPage(page: IShow): void {
		for (let key in this.pages) {
			this.pages[key].show = false;
		}
		page.show = true;
	};

	restJsonRequestOnlineApproval(method: HttpMethod, url: string, data: any, pHttpParams: any, funSuccess: any): void {
		this.restJsonRequest(method, this.serviceUrl + url, data, pHttpParams, true, funSuccess);
	}

	restJsonRequest(method: HttpMethod, url: string, data: any, pHttpParams: any, withCredentials: boolean, funSuccess: any): void {
		this.log(data, "OK", "запрос " + method + " на " + url);

		if (pHttpParams == null) {
			pHttpParams = new HttpParams();
		}

		const req = new HttpRequest(method,
			url,
			data,
			{
				headers: new HttpHeaders().set('Content-Type', 'application/json'),
				params: pHttpParams,
				"withCredentials": withCredentials
			}
		);

		//console.log("перед this.http.request(req)");
		this.http.request(req).subscribe(
			(event: any) => {
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
			(error: any) => {
				this.log(error, "ERROR", "запрос выполнился с ошибкой статус=" + error.status + " текст ответа сервера=" + error.statusText);
				var eUserText: string = error.message;
				if (error.error["error_code"] != undefined) { eUserText = error.error["error_message"] }
				console.error(eUserText);
			}
		);
	}

	log(message: any, status: string = "OK", hint?: string): void {
		var d = new Date();
		var sd = '';
		try { sd = d.toISOString(); } catch (e) { sd = d.toUTCString(); }//for IE8

		if (hint == undefined) { hint = ''; }
		var s = sd + ' : ' + status + ' : ' + hint;
		console.log(s, message);
	}

	debug(message: any, hint?: string): void {
		this.log(message, "DEBUG", hint);
	}
}