"use server";

import { db } from "@/db";
import { blueSkeyAccountsTable } from "@/db/schema";
import { serverAction } from "@/server/__internals";
import { eq } from "drizzle-orm";
import { z } from "zod";

const BlueSkyAccountSchema = z.object({
  identifier: z.string(),
  password: z.string(),
});

export const getConnectedAccount = async () => {
  return serverAction.protectedAction(async () => {
    const account = await db
      .select()
      .from(blueSkeyAccountsTable)
      .where(eq(blueSkeyAccountsTable.userId, serverAction.user!.id));

    if (account.length === 0) {
      return {
        success: false,
        message: "No BlueSky account found",
        data: null,
      };
    }

    return {
      success: true,
      message: "Account retrieved successfully",
      data: account[0],
    };
  }, "getConnectedAccount");
};

export const connectBlueSkyAccount = async ({
  identifier,
  password,
}: {
  identifier: string;
  password: string;
}) => {
  return serverAction.protectedAction(async () => {
    // Validate input data
    const validationResult = serverAction.validateInput(
      BlueSkyAccountSchema,
      { identifier, password },
      "connectBlueSkyAccount"
    );

    if ("success" in validationResult && !validationResult.success) {
      return validationResult;
    }

    // Check if account already exists
    const existingAccount = await db
      .select()
      .from(blueSkeyAccountsTable)
      .where(eq(blueSkeyAccountsTable.userId, serverAction.user!.id));

    if (existingAccount.length > 0) {
      return {
        success: false,
        message: "BlueSky account already connected for this user",
      };
    }

    const account: typeof blueSkeyAccountsTable.$inferInsert = {
      userId: serverAction.user!.id,
      url: identifier,
      password: password,
    };

    await db.insert(blueSkeyAccountsTable).values(account);

    return {
      success: true,
      message: "BlueSky account connected successfully",
    };
  }, "connectBlueSkyAccount");
};

export const deleteBlueSkyAccount = async () => {
  return serverAction.protectedAction(async () => {
    // Check if account exists
    const existingAccount = await db
      .select()
      .from(blueSkeyAccountsTable)
      .where(eq(blueSkeyAccountsTable.userId, serverAction.user!.id));

    if (existingAccount.length === 0) {
      return {
        success: false,
        message: "No BlueSky account found for this user",
      };
    }

    // Delete the account
    await db
      .delete(blueSkeyAccountsTable)
      .where(eq(blueSkeyAccountsTable.userId, serverAction.user!.id));

    return {
      success: true,
      message: "BlueSky account deleted successfully",
    };
  }, "deleteBlueSkyAccount");
};
