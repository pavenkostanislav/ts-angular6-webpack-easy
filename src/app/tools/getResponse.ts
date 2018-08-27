import { Response } from '@angular/http';
export function getResponse<T>(res: Response): T {
  try {
    if (res.json) {
      return <T>res.json();
    }
    return <T>(<any>res)._body;
  }
  catch (e) {
    return <T>(<any>res)._body;
  }
}