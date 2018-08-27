import { Response } from '@angular/http';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import { getResponse } from './getResponse';

export async function getRequest<TResponse>(observable: Observable<Response>): Promise<TResponse> {
  return observable.map(response => getResponse<TResponse>(response)).toPromise();
}


