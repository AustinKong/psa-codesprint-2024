const config = require('./utils/config');
const express = require('express');
const app = express();
const cors = require('cors');
const logger = require('./utils/logger');

app.use(cors());
app.use(express.static('dist')); // Copy built frontend to dist folder in here
app.use(express.json());

const testRouter = require('./controllers/test');
app.use('/api/test', testRouter);

module.exports = app;