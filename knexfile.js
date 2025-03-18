// Update with your config settings.

module.exports = {

  client: 'postgresql',
  connection: {
    host: 'localhost',
    database: 'tasksdb',
    user: 'root',
    password: '123456',
    port: 5432 
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }


};
