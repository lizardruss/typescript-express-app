"use strict";
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const enrouten = require("express-enrouten");
const models_1 = require("./models");
// Creates and configures an ExpressJS web server.
class App {
    //Run configuration methods on the Express instance.
    constructor() {
        this.express = express();
        this.middleware();
        this.models();
        this.controllers();
    }
    models() {
        console.log(new models_1.User({
            id: 1,
            username: "Russ"
        }));
    }
    // Configure Express middleware.
    middleware() {
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }
    // Configure API endpoints.
    controllers() {
        this.express.use(enrouten({
            directory: "controllers"
        }));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = new App().express;
