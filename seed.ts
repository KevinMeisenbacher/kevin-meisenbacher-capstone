import { createSeedClient } from "@snaplet/seed";

const main = async () => {
  const seed = await createSeedClient() as any;

  // Reset all tables
  // await seed.$resetDatabase() as any;

  // Seed 10 users
  const numUsers = 10;
  await seed.users((x: any) =>
    x(numUsers, (() => {
      let i = 1;
      return () => {
        const row = {
        id: i,
        username: `user${i}`,
        password: "password",
        email: `user${i}@example.com`,
        };
        i++;
        console.log("Seeding:", row);
        return row;
      };
    })())
  );
  console.log("Database seeded successfully!");
  process.exit();
};

main();
