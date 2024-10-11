const dbInitRouter = require('express').Router();
const logger = require('../utils/logger');
const pool = require('../utils/db');

dbInitRouter.get('/init', async (request, response) => {
  try {
    await pool.query(`
      CREATE TABLE users(
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) NOT NULL,
        email VARCHAR(100) NOT NULL UNIQUE,
        password_hash VARCHAR(255) NOT NULL
      )
      `)
    logger.info('Database initialization successful');
  } catch (error) {
    logger.error(`Database initialization failed. Error: ${error}`);
  }
})

module.exports = dbInitRouter;