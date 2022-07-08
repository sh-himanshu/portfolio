const parse = require('pg-connection-string').parse;

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      ...parse(env('DATABASE_URL')),
      ssl: {
        rejectUnauthorized: false,
      },
    },
    debug: false,
    pool: { max: 3 },
  },
});
