const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.static('dist')); // Copy built frontend to dist folder in here
app.use(express.json());

const authRouter = require('./controllers/auth');
app.use('/api/auth', authRouter);

module.exports = app;