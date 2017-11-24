//startin point - instead of ES6 imports we are using the old fashioned require
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const appl = express();
const router = require('./route.js');

const mongoose = require('mongoose');

//DB setup
mongoose.connect('mongodb://localhost:auth/auth');

// App setup
appl.use(morgan('combined'));
appl.use(bodyParser({ type: '*/*' }));
router(appl);

//Server setup
const port = process.env.PORT || 3090;
const server = http.createServer(appl);
server.listen(port);
console.log("Server listening on Port",port);
