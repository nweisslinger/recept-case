import { pgTable, serial } from "drizzle-orm/pg-core";

export const phoneCallGroupSchema = pgTable("phone_call_groups", {
  id: serial().primaryKey().notNull(),
});
