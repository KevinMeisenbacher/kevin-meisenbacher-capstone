require("dotenv").config();

const baseConfig = {
  client: "pg",
  connection: {
    host: process.env.DATABASE_URL || process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE_URL || process.env.DB_DATABASE
  },
  migrations: {
    directory: './src/migrations'
  },
  seeds: {
    directory: './src/seeds'
  }
};

module.exports = {
  development: baseConfig,
  production: baseConfig
};