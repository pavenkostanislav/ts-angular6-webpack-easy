import { LoggerLayer } from "../types";


export interface Logger {
  debug(layer: LoggerLayer, message: string, ...params: any[]): void;
  info(layer: LoggerLayer, message: string, ...params: any[]): void;
  error(layer: LoggerLayer, err: any, ...params: any[]): void;
}