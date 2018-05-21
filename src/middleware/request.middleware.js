import logger from '../config/log.config';

const logInboundRequest = (req, res, next) => {
  logger.info(`Incoming request from [URL]: ${req.originalUrl}, [TYPE]: ${req.method}, [BODY]: ${JSON.stringify(req.body)} `);
  next();
};

export default {
  logInboundRequest,
};
