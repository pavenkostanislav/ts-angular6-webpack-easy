import { ActivatedRoute } from '@angular/router';
import { IMap } from '../interfaces';
export function getRouteParams(route: ActivatedRoute): IMap {
	let params: IMap;
	route.params.subscribe(p => params = p).unsubscribe();
	return params;
}