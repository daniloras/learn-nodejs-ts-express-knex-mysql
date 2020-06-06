import knex from 'knex';

const connection = knex({
  client: process.env.DB_CONNECTION,
  connection: {
    host : process.env.DB_HOST,
    user : process.env.DB_USERNAME,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_DATABASE
  },
  useNullAsDefault: true,    
});

export default connection;