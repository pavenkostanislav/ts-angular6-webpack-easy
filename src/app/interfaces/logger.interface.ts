import { LoggerLayer } from "../types";
import { LoggerParagraph } from "../types";

export interface ILogger {
  debug(layer: LoggerLayer, paragraph: LoggerParagraph, message: string, ...params: any[]): void;
  info(layer: LoggerLayer, paragraph: LoggerParagraph, message: string, ...params: any[]): void;
  warn(layer: LoggerLayer, paragraph: LoggerParagraph, message: string, ...params: any[]): void;
  error(layer: LoggerLayer, paragraph: LoggerParagraph, err: any, ...params: any[]): void;
}