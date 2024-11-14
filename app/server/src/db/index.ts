import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import { migrate } from "drizzle-orm/node-postgres/migrator";

import schema from "./schema/schema";

// TODO: add error handling for when database connection fails
const db = drizzle(process.env.DATABASE_URL!);

(async () => {
  await migrate(db, {
    migrationsTable: "__drizzle_migrations",
    migrationsFolder: "src/db/migrations",
    migrationsSchema: "public",
  });

  // Check that the application version matches the database.
  const result = await db
    .select({
      version_major: schema.metadataTable.application_version_major,
      version_minor: schema.metadataTable.application_version_minor,
      version_patch: schema.metadataTable.application_version_patch,
    })
    .from(schema.metadataTable)
    .execute();

  const { version_major, version_minor, version_patch } = result[0];
  const packageVersion: string[] | undefined =
    process.env.npm_package_version?.split(".");

  if (!packageVersion) {
    throw "Undefined package version.";
  }

  if (
    version_major.toString() !== packageVersion[0] ||
    version_minor.toString() !== packageVersion[1] ||
    version_patch.toString() !== packageVersion[2]
  ) {
    // TODO: Update the version numbers in the database.
    // Throwing an error for now until that's implemented.
    throw "Package version and database version mismatch.";
  }
})();

export default db;
