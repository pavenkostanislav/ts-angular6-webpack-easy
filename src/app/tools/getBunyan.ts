import * as bunyan from 'bunyan';
const config = require('./config.json');
import * as _ from 'lodash';
import { Logger } from '../interfaces';
const consoleFormattedStream = require('bunyan-console-formatted-stream');

export function getBunyan(): Logger {
  const logger = bunyan.createLogger(createBunyanLogger());

  const result: Logger = {
    info: (layer: string, paragraph: string, message: string, ...params: any[]) => logger.info({ layer, paragraph }, message, ...params),
    debug: (layer: string, paragraph: string, message: string, ...params: any[]) => logger.debug({ layer, paragraph }, message, ...params),
    error: (layer: string, paragraph: string, error: any, ...params) => {
      if (!!error && error.code === 500) {
        logger.fatal({ layer }, `Fatal error ${error.code}, ${error.message} `, error, ...params)
      }
      else {
        error.code
          ? logger.error({ layer, paragraph }, `Error ${error.code}, ${error.message} `, error, ...params)
          : logger.error({ layer, paragraph }, error, ...params);
      }
    }
  };

  result.info('init', null, 'Logger created');
  return result;
}

function createBunyanLogger(): bunyan.LoggerOptions {
  const level: bunyan.LogLevel = config.log.level;
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
