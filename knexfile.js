require("dotenv").config();

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: './music_buddy.db'
    },
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    },
    useNullAsDefault: true
  }
};

// module.exports = {
//   development: {
//     client: 'postgresql',
//     connection: {
//       filename: 'music_buddy',
//       user: 'postgres',
//       password: process.env.DB_PASSWORD
//     },
//     pool: {
//       min: 2,
//       max: 10
//     },
//     migrations: {
//       tableName: 'knex_user_migrations'
//     }
//   }
// }