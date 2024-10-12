const config = require('./config');
const Sequelize = require('sequelize');
// const { PostgresDialect } = require('@sequelize/postgres');

const sequelize = new Sequelize(config.DB_NAME, config.DB_USER, config.DB_PASSWORD, {
  dialect: 'postgres',
  host: config.DB_HOST,
  port: 5432,
  logging: false
})

module.exports = sequelize;