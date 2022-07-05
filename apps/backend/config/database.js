const parse = require('pg-connection-string').parse;

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: parse(env('DATABASE_URL')),
    pool: { max: 3 },
  },
});
