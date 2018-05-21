import mongoose from 'mongoose';

import logger from './log.config';

mongoose.connection.on('connected', () => {
  logger.info(`Connected to ${process.env.NODE_ENV} database`);
});

mongoose.connection.on('disconnected', () => {
  logger.info(`mongoose default connection to ${process.env.NODE_ENV} database disconnected`);
});

mongoose.connection.on('error', (err) => {
  logger.error(`Failed to connect to ${process.env.NODE_ENV} database on startup`, err);
});

const gracefulExit = () => {
  mongoose.connection.close(() => {
    logger.info(`mongoose default connection with ${process.env.NODE_ENV} database is disconnected through app termination`);
    process.exit(0);
  });
};

process.on('SIGINT', gracefulExit).on('SIGTERM', gracefulExit);

module.exports = mongoose;
