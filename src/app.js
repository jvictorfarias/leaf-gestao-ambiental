import express from 'express';
import path from 'path';
import routes from './routes';
import log from './app/middlewares/log';

import './database';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
    );
    this.server.use(log('combined'));
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
