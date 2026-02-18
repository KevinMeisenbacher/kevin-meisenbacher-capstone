require("dotenv").config();

// module.exports = {
//   development: {
//     client: "sqlite3",
//     connection: {
//       filename: './music_buddy.db'
//     },
//     migrations: {
//       directory: './migrations'
//     },
//     seeds: {
//       directory: './seeds'
//     },
//     useNullAsDefault: true
//   }
// };

module.exports = {
  development: {
    client: "pg",
    connection: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE
    },
        migrations: {
          directory: './migrations'
        },
        seeds: {
          directory: './seeds'
        },
  }
}