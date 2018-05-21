import winston from 'winston';

import config from '../config/app.config';

require('winston-mongodb');

const {
  combine,
  timestamp,
  printf,
} = winston.format;

const logLevel = process.env.NODE_ENV === 'production' ? 'info' : 'debug';

const myFormat = printf(info => `${info.timestamp} [${info.level}]: ${info.message}`);

const logger = winston.createLogger({
  format: combine(
    winston.format.colorize(),
    timestamp(),
    myFormat,
  ),
  level: logLevel,
  levels: {
    fatal: 0,
    error: 1,
    warn: 2,
    info: 3,
    debug: 4,
    trace: 5,
  },
  transports: [
    new winston.transports.Console({
      colorize: true,
      timestamp: true,
    }),
    new winston.transports.MongoDB({
      db: config.db.url,
      collection: 'logs',
      level: logLevel,
    }),
  ],
});

module.exports = logger;
