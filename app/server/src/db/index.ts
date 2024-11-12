import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";

// TODO: add error handling for when database connection fails
const db = drizzle(process.env.DATABASE_URL!);
