import express from 'express';
import bodyParser from 'body-parser';

import routes from './routes/route';
import config from './config/app.config';
import db from './config/db.config';
import logger from './config/log.config';

const app = express();

app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use(bodyParser.json());

routes(app);

app.listen(config.app.port, () => {
  logger.info(`Listing on port ${config.app.port}`);
});

db.connect(config.db.url).then(() =>
  logger.info(`Start to connect ${process.env.NODE_ENV}`)).catch(err =>
  logger.error(`Server initialization failed: ${JSON.stringify(err)}`));
