import {
  boolean,
  integer,
  pgTable,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const blueSkeyAccountsTable = pgTable("blueSkeyAccounts", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  userId: varchar({ length: 255 }).notNull(),
  url: varchar({ length: 255 }).notNull().unique(),
  password: varchar({ length: 255 }).notNull(),
  created_at: timestamp().defaultNow().notNull(),
  updated_at: timestamp().defaultNow().notNull(),
});

export const postTable = pgTable("post", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  userId: varchar({ length: 255 }).notNull(),
  text: varchar({ length: 255 }).notNull().unique(),
  scheduledOn: varchar({ length: 255 }).notNull(),
  posted: boolean().notNull().default(false),
  created_at: timestamp().defaultNow().notNull(),
  updated_at: timestamp().defaultNow().notNull(),
});
