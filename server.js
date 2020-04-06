'use strict'

/*
|--------------------------------------------------------------------------
| Http server
|--------------------------------------------------------------------------
|
| This file bootstrap Adonisjs to start the HTTP server. You are free to
| customize the process of booting the http server.
|
| """ Loading ace commands """
|     At times you may want to load ace commands when starting the HTTP server.
|     Same can be done by chaining `loadCommands()` method after
|
| """ Preloading files """
|     Also you can preload files by calling `preLoad('path/to/file')` method.
|     Make sure to pass relative path from the project root.
*/

const { Ignitor } = require('@adonisjs/ignitor')
const mongoose = require("mongoose");

new Ignitor(require('@adonisjs/fold'))
  .appRoot(__dirname)
  .fireHttpServer()
  .catch(console.error)

// let mongoURL = "mongodb://127.0.0.1:27017/data";
let mongoURL = "mongodb+srv://user:123456abc@cluster-app-zaajg.mongodb.net/app?retryWrites=true&w=majority"

mongoose.connect(mongoURL).then(() => {
  console.log("mongodb connect");
}).catch((err) => {
  console.log(err);
})
