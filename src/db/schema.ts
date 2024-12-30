import { boolean, integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const blueSkeyAccountsTable = pgTable("blueSkeyAccounts", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  userId: varchar({ length: 255 }).notNull(),
  url: varchar({ length: 255 }).notNull().unique(),
  password: varchar({ length: 255 }).notNull(),
  // add created at protery
});

// post table content and postingTime and category and user Id

export const postTable = pgTable("post", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  userId: varchar({ length: 255 }).notNull(),
  url: varchar({ length: 255 }).notNull().unique(),
  sechdeuledOn: varchar({ length: 255 }).notNull(),
  posted: boolean().notNull().default(false),
});

// blue sky connected Account
