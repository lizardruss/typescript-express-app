import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import * as enrouten from 'express-enrouten';
import {User} from './models';

// Creates and configures an ExpressJS web server.
class App {

  // ref to Express instance
  public express: express.Application;

  //Run configuration methods on the Express instance.
  constructor() {
    this.express = express();
    this.middleware();
    this.models();
    this.controllers();
  }

  private models(): void {
    console.log(new User({
      id: 1,
      username: "Russ"
    }));
  }

  // Configure Express middleware.
  private middleware(): void {
    this.express.use(logger('dev'));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }

  // Configure API endpoints.
  private controllers(): void {
    this.express.use(enrouten({
      directory: "controllers"
    }));
  }

}

export default new App().express;