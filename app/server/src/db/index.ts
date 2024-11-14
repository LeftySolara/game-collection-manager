import "dotenv/config";
import { drizzle, NodePgDatabase } from "drizzle-orm/node-postgres";
import { migrate } from "drizzle-orm/node-postgres/migrator";

import schema from "./schema/schema";

// Update the version numbers in the database to match the package version.
const insertPackageVersion = async (
  db: NodePgDatabase,
  packageVersion: string[],
) => {
  await db.transaction(async (tx) => {
    await tx.delete(schema.metadataTable);
    await tx.insert(schema.metadataTable).values({
      application_version_major: Number(packageVersion[0]),
      application_version_minor: Number(packageVersion[1]),
      application_version_patch: Number(packageVersion[2]),
    });
  });
};

export const checkAppVersion = async (db: NodePgDatabase) => {
  const packageVersion: string[] | undefined =
    process.env.npm_package_version?.split(".");

  if (!packageVersion) {
    throw "Undefined package version.";
  }

  const result = await db
    .select({
      version_major: schema.metadataTable.application_version_major,
      version_minor: schema.metadataTable.application_version_minor,
      version_patch: schema.metadataTable.application_version_patch,
    })
    .from(schema.metadataTable)
    .execute();

  if (result) {
    const version_major = result.values().next();
    const version_minor = result.values().next();
    const version_patch = result.values().next();

    if (
      version_major.toString() !== packageVersion[0] ||
      version_minor.toString() !== packageVersion[1] ||
      version_patch.toString() !== packageVersion[2]
    ) {
      insertPackageVersion(db, packageVersion);
    }
  } else {
    insertPackageVersion(db, packageVersion);
  }
};

// TODO: add error handling for when database connection fails
export const db = drizzle(process.env.DATABASE_URL!);

(async () => {
  await migrate(db, {
    migrationsTable: "__drizzle_migrations",
    migrationsFolder: "src/db/migrations",
    migrationsSchema: "public",
  });
})();
