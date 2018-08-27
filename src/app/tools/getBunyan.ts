import * as bunyan from 'bunyan';
import * as _ from 'lodash';
import { IConfig, ILogger } from '../interfaces';
const consoleFormattedStream = require('bunyan-console-formatted-stream');

export function getBunyan(config: IConfig): ILogger {
  const logger = bunyan.createLogger(createBunyanLogger(config));

  const result: ILogger = {
    info: (layer: string, paragraph: string, message: string, ...params: any[]) => logger.info(layer, paragraph, message, ...params),
    warn: (layer: string, paragraph: string, message: string, ...params: any[]) => logger.warn(layer, paragraph, message, ...params),
    debug: (layer: string, paragraph: string, message: string, ...params: any[]) => logger.debug(layer, paragraph, message, ...params),
    error: (layer: string, paragraph: string, error: any, ...params) => {
      if (!!error && error.status === 500) {
        logger.fatal(layer, paragraph, `Fatal error ${error.error_code}, ${error.error_message} `, error, ...params)
      }
      else {
        error.error_code
          ? logger.error(layer, paragraph, `Error ${error.error_code}, ${error.error_message} `, error, ...params)
          : logger.error(layer, paragraph, error, ...params);
      }
    }
  };

  result.info('init', null, 'Logger created');
  return result;
}

function createBunyanLogger(config: IConfig): bunyan.LoggerOptions {
  const level = <bunyan.LogLevel>config.log.level;
  const hiddenFieldsConfig = config.log.hideFields || '';
  const hiddenFields = _(hiddenFieldsConfig.split(','))
    .keyBy(field => field)
    .mapValues(field => null)
    .value();

  return {
    name: 'car-loan',
    level: level,
    streams: [{
      level: level,
      type: 'raw',
      stream: new consoleFormattedStream({
        forceColor: true,
        stringifiers: {
          ...hiddenFields
        },
        prefixers: {
          source: (source: string) => source
        }
      })
    }]
  };
}
