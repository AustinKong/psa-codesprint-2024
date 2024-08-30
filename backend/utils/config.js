require('dotenv').config()

const PORT = process.env.PORT;
const SECRET = process.env.SECRET;
const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;

module.exports = {
  PORT,
  SECRET,
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_NAME
}