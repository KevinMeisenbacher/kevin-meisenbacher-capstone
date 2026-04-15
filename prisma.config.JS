import 'dotenv/config'
import { defineConfig, env } from 'prisma/config'
import { Pool } from 'pg'
import { PrismaPg } from '@prisma/adapter-pg'

const pool = new Pool({
  connectionString: env('DATABASE_URL'),
})

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations',
  },
  datasource: {
    url: env('DATABASE_URL'),
    adapter: new PrismaPg(pool),
  },
})