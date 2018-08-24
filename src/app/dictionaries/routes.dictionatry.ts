import { IMap } from "../interfaces";
import { RouteUrl } from "../interfaces";

export const routes: IMap<RouteUrl> = {
  login: { url: 'login' },
  registration: { url: 'registration' },
  passport: { url: 'passport' }
};