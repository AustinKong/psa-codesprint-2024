const config = require('./config');
const { Pool } = require('pg');

const pool = new Pool({
  user: config.DB_USER,
  password: config.DB_PASSWORD,
  host: config.DB_HOST,
  port: 5432,
  database: config.DB_NAME 
});

module.exports = pool;