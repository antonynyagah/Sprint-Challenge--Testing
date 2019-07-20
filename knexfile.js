// Update with your config settings.

module.exports = {

    development: {
      client: 'sqlite3',
      useNullAsDefault: true,
      connection: {
        filename:  './data/games.db3'
      }
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: '.data/seeds',
    }
  };