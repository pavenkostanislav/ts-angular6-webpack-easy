import { Response } from '@angular/http';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';

export async function mapRequest<TResponse>(observable: Observable<Response>): Promise<TResponse> {
  return observable.map(response => mapResponse<TResponse>(response)).toPromise();
}

export function mapResponse<T>(res: Response): T {
  try {
    if (res.json) {
      return <T>res.json();
    }
    return <T>(<any>res)._body;
  } catch (e) {
    return <T>(<any>res)._body;
  }
}
