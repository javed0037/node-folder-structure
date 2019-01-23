
var Promise = require("bluebird");
global.Promise = Promise;

const express = require('express');
const http = require('http');
const app = express();
// const router = require('./routes/index');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
app.use(cors());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


// try {
//     app.use(router);
//     app.use('', (error, req, res, next) => {
//         res.send(error.message);
//     })

let port = process.env.PORT || 3000;
let server = http.createServer(app).listen(port);

server.on('connection', function (x) { console.log('On Connection '); });
server.on('listening', (x) => { console.log('listening on port ', port); });
// } catch (error) {
//     console.log('default error => ');
//     console.error(error);
// }