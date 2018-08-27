import { Injectable, OnInit } from "@angular/core";
import { IConfig } from "../interfaces";

const config = require('../tools/config.json');

@Injectable()
export class ConfigService {
	public getConfig(): IConfig {
		const c: IConfig = config;
		//c.environment.url = 'http://rbib-it1:8089';
		return c;
	}
}