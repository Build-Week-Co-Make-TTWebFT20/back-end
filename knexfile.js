// Update with your config settings.
require('dotenv').config();
const pg = require('pg');

const localConnection = process.env.LOCAL_PG_ROUTE
// const pgConnection = process.env.DATABASE_URL || "postgresql://postgres@localhost/auth";

let connection;
if (process.env.DATABASE_URL){
  pg.defaults.ssl = { rejectUnauthorized: false};
  connection = process.env.DATABASE_URL;
} else {
  connection = localConnection
}

const sharedConfig = {
  client: 'pg',
  connection,
  migrations: { direction: './database/migrations' },
  seeds: { directory: './database/seeds' }
};

module.exports = {

  development: { ...sharedConfig },
  production: {
    ...sharedConfig,
    pool: {min: 2, max: 10},
  },
};
