import { SeedPg } from "@snaplet/seed/adapter-pg";
import { defineConfig } from "@snaplet/seed/config";
import { Client } from "pg";

export default defineConfig({
  adapter: async () => {
    const client = new Client({connectionString: 'postgresql://postgres:pass@localhost:5432/music_buddy'});
    await client.connect();
    return new SeedPg(client);
  },
});