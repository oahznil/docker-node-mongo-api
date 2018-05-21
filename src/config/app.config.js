import dotenv from 'dotenv';

dotenv.config({
  silent: process.env.NODE_ENV === 'production',
});

const development = {
  app: {
    port: process.env.port || '3030',
  },
  db: {
    url: process.env.MONGODB_CONNECTION,
  },
};

const production = {
  app: {
    port: process.env.port || '3000',
  },
  db: {
    url: process.env.MONGODB_CONNECTION,
  },
};

const config = {
  development,
  production,
};

module.exports = config[process.env.NODE_ENV || 'development'];
