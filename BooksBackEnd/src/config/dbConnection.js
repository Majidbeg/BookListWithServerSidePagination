const Promise = require('bluebird');
const initOptions = {
  promiseLib: Promise,
  capSQL: true
};

const credentials = {
  user: "postgres",
  host: "localhost",
  database: "Book",
  password: "postgres",
  port: 5432,
};


const pgp = require('pg-promise')(initOptions);
const pool = pgp(credentials)
// const db = pgp(connectionParams);

module.exports = {  pgp, pool };
