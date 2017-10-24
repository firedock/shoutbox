'use strict';

const express = require('express'),app = express();
const mongoose = require('mongoose');
mongoose.Promise = global.Promise; // native promises
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// CONFIG
// =============================================================================
const config = {
    appRoot: __dirname
};
require('dotenv').config({ // require env vars
    path: './config/.env'
});

// CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
});

// MONGO VIA MONGOOSE
// =============================================================================
let uri = 'mongodb://' + process.env.DB_HOST + '/' + process.env.DB_DATABASE; // open
if (process.env.DB_USER && process.env.DB_PASSWORD) // auth
    uri = 'mongodb://' + process.env.DB_USER + ':' + process.env.DB_PASSWORD + '@' + process.env.DB_HOST + '/' + process.env.DB_DATABASE;

mongoose.connect(uri, {
    useMongoClient: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongo connection error:')); // on error
db.once('open', function () { // on success
    console.log('mongoDB connected via mongoose.');
});

// ROUTES
// =============================================================================
const routes = require('./routes');
routes(app);

// START SERVER
// =============================================================================
let port = process.env.PORT || 3000;
app.listen(port);