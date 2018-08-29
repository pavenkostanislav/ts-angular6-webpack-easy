import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, ResponseContentType, URLSearchParams } from '@angular/http';
import { forIn } from 'lodash';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { IConfig, IMap, ILogger } from '../interfaces';
import { Response } from '@angular/http';
import { ConfigService } from './config.service';
import { getBunyan } from '../tools/getBunyan';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiService {
  public config: IConfig;
  public log: ILogger;
  constructor(
    private http: Http,
    configSrv: ConfigService
  ) {
    this.config = configSrv.getConfig();
    this.log = getBunyan(this.config);
  }

  public get<T>(url: string, params?: IMap<any>, headers?: IMap<any>): Promise<T> {
    return this.getRequest<T>(this.http.get(this.getApiUrl(url), this.getRequestOptions(params, headers)));
  }

  public delete<T>(url: string, params?: IMap<any>, headers?: IMap<any>): Promise<T> {
    return this.getRequest<T>(this.http.delete(this.getApiUrl(url), this.getRequestOptions(params, headers)));
  }

  public post<T>(url: string, data?: any, params?: IMap<any>, headers?: IMap<any>): Promise<T> {
    return this.getRequest<T>(this.http.post(this.getApiUrl(url), data, this.getRequestOptions(params, headers)));
  }

  public postBlob<T>(url: string, data?: any, params?: IMap<any>, headers?: IMap<any>): Promise<T> {
    const options = this.getRequestOptions(params, headers);
    options.responseType = ResponseContentType.Blob;
    return this.http.post(this.getApiUrl(url), data, options).map((res: any) => res._body).toPromise();
  }

  public put<T>(url: string, data?: any, params?: IMap<any>, headers?: IMap<any>): Promise<T> {
    return this.getRequest<T>(this.http.put(this.getApiUrl(url), data, this.getRequestOptions(params, headers)));
  }

  private getApiUrl(url: string): string {
    const _url = `${this.config.environment.url}/api/${url}`;
    this.log.debug('api', '1.3', _url);
    return _url;
  }

  private getRequestOptions(params: IMap<any>, headers: IMap<any>): RequestOptions {
    const result = new RequestOptions({
      withCredentials: true
    });
    if (headers) {
      const searchHeaders = new Headers();
      forIn(headers, (value: any, field: any) => searchHeaders.set(field, value.toString()));
      result.headers = searchHeaders;
    }
    if (params) {
      const searchParams = new URLSearchParams();
      forIn(params, (value: any, field: any) => searchParams.set(field, value.toString()));
      result.params = searchParams;
    }
    return result;
  }

  private async getRequest<TResponse>(observable: Observable<Response>): Promise<TResponse> {
    return observable.map((response: Response) => this.getResponse<TResponse>(response)).toPromise();
  }

  private getResponse<T>(res: Response): T {
    const body: T = <T>(<any>res)._body
    try {
      if (res.json && !!body) {
        return <T>res.json();
      }
      return body;
    }
    catch (e) {
      this.log.error('api', '1.3', body);

      return body;
    }
  }
}


