import { pgTable, smallint } from "drizzle-orm/pg-core";

const metadataTable = pgTable("metadata", {
  application_version_major: smallint().notNull(),
  application_version_minor: smallint().notNull(),
  application_version_patch: smallint().notNull(),
});

export default metadataTable;
