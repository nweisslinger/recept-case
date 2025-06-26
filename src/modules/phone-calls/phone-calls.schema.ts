import {
  pgTable,
  serial,
  varchar,
  timestamp,
  pgEnum,
} from "drizzle-orm/pg-core";

export const callStatus = pgEnum("call_status", ["New", "Viewed"]);

export const phoneCallSchema = pgTable("phone_calls", {
  id: serial().primaryKey().notNull(),
  phoneNumber: varchar("phone_number", { length: 255 }),
  createdAt: timestamp("created_at", {
    withTimezone: true,
    mode: "string",
  }).defaultNow(),
  status: callStatus(),
});
