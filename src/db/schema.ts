import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const blueSkeyAccountsTable = pgTable("blueSkeyAccounts", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  userId: varchar({ length: 255 }).notNull(),
  url: varchar({ length: 255 }).notNull().unique(),
  password: varchar({ length: 255 }).notNull(),
});

// post table content and postingTime and category and user Id

// blue sky connected Account
