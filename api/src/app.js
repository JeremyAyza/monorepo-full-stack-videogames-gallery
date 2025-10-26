const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
require('dotenv').config();

const routerApp = require('./routes');
const server = express();

// Middlewares
server.use(express.urlencoded({ extended: true, limit: '50mb' }));
server.use(express.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));

// CORS Configuration
const corsOptions = {
	origin: process.env.CLIENT_URL || 'http://localhost:3000',
	credentials: true,
	optionsSuccessStatus: 200
};

server.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', corsOptions.origin);
	res.header('Access-Control-Allow-Credentials', corsOptions.credentials);
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
});

// Routes
server.use('/', routerApp);

module.exports = server;
