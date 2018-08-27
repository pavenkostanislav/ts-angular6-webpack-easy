import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, ResponseContentType, URLSearchParams } from '@angular/http';
import { forIn } from 'lodash';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { IMap } from '../interfaces';
import { getRequest } from '../tools/getRequest';

const environment = {
  url: 'https://online-auto.rusfinance.ru/OnlineApproval'
}

@Injectable()
export class ApiService {
  constructor(private http: Http) { }

  public get<T>(url: string, params?: IMap<any>): Promise<T> {
    return getRequest<T>(this.http.get(this.getApiUrl(url), this.getRequestOptions(params)));
  }

  public delete<T>(url: string, params?: IMap<any>): Promise<T> {
    return getRequest<T>(this.http.delete(this.getApiUrl(url), this.getRequestOptions(params)));
  }

  public post<T>(url: string, data?: any, params?: IMap<any>): Promise<T> {
    return getRequest<T>(this.http.post(this.getApiUrl(url), data, this.getRequestOptions(params)));
  }

  public postBlob<T>(url: string, data?: any, params?: IMap<any>): Promise<T> {
    const options = this.getRequestOptions(params);
    options.responseType = ResponseContentType.Blob;
    return this.http.post(this.getApiUrl(url), data, options).map((res: any) => res._body).toPromise();
  }

  public put<T>(url: string, data?: any, params?: IMap<any>): Promise<T> {
    return getRequest<T>(this.http.put(this.getApiUrl(url), data, this.getRequestOptions(params)));
  }

  private getApiUrl(url: string): string {
    return `${environment.url}/api/${url}`;
  }

  private getRequestOptions(params: IMap<any>, body?: any): RequestOptions {
    if (!params) { return null };
    const headers = new Headers();
    const result = new RequestOptions({ headers });
    result.body = body;
    if (params) {
      const searchParams = new URLSearchParams();
      forIn(params, (value: any, field: any) => searchParams.set(field, value.toString()));
      result.params = searchParams;
    }
    return result;
  }

}
/*
export interface IApiService {
	get<T = any>(url: string, params?: IMap<any>): Promise<T>;
	post<T = any>(url: string, data?: any, params?: IMap): Promise<T>;
	postBlob<T = any>(url: string, data?: any, params?: IMap): Promise<T>;
	put<T = any>(url: string, data?: any, params?: IMap): Promise<T>;
	delete<T = any>(url: string, params?: IMap<any>): Promise<T>;
}
*/