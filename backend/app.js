const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.static('dist')); // Copy built frontend to dist folder in here
app.use(express.json());

const authRouter = require('./controllers/auth');
const dbInitRouter = require('./controllers/dbInit'); // For setting up database
app.use('/api/auth', authRouter);
app.use('/api/dbInit', dbInitRouter);

module.exports = app;