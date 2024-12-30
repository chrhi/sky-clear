"use server";

import { db } from "@/db";
import { blueSkeyAccountsTable } from "@/db/schema";
import { ActionResponse } from "@/types";
import { currentUser } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { z } from "zod";

const BlueSkyAccountSchema = z.object({
  identifier: z.string(),
  password: z.string(),
});

export const getConnectedAccount = async (): Promise<ActionResponse> => {
  try {
    const user = await currentUser();
    if (!user) {
      return {
        success: false,
        message: "User is not authenticated",
      };
    }

    const account = await db
      .select()
      .from(blueSkeyAccountsTable)
      .where(eq(blueSkeyAccountsTable.userId, user.id));

    if (account.length === 0) {
      return {
        success: false,
        message: "No BlueSky account found",
        data: null,
      };
    }

    console.log(account[0]);

    return {
      success: true,
      message: "Account retrieved successfully",
      data: account[0],
    };
  } catch (error) {
    console.error("Error fetching BlueSky account:", error);
    return {
      success: false,
      message: "Failed to fetch BlueSky account",
      data: error instanceof Error ? error.message : "Unknown error occurred",
    };
  }
};

export const connectBlueSkyAccount = async ({
  identifier,
  password,
}: {
  identifier: string;
  password: string;
}): Promise<ActionResponse> => {
  try {
    // Validate user authentication
    const user = await currentUser();
    if (!user) {
      return {
        success: false,
        message: "User is not authenticated",
      };
    }

    // Validate input data
    const validatedData = BlueSkyAccountSchema.safeParse({
      identifier,
      password,
    });

    if (!validatedData.success) {
      return {
        success: false,
        message: "Validation failed",
        data: validatedData.error.flatten(),
      };
    }

    // Check if account already exists
    const existingAccount = await db
      .select()
      .from(blueSkeyAccountsTable)
      .where(eq(blueSkeyAccountsTable.userId, user.id));

    if (existingAccount.length > 0) {
      return {
        success: false,
        message: "BlueSky account already connected for this user",
      };
    }

    const account: typeof blueSkeyAccountsTable.$inferInsert = {
      userId: user.id,
      url: validatedData.data.identifier,
      password: validatedData.data.password,
    };

    await db.insert(blueSkeyAccountsTable).values(account);

    return {
      success: true,
      message: "BlueSky account connected successfully",
    };
  } catch (error) {
    console.error("Error connecting BlueSky account:", error);
    return {
      success: false,
      message: "Failed to connect BlueSky account",
      data: error instanceof Error ? error.message : "Unknown error occurred",
    };
  }
};

export const deleteBlueSkyAccount = async (): Promise<ActionResponse> => {
  try {
    const user = await currentUser();
    if (!user) {
      return {
        success: false,
        message: "User is not authenticated",
      };
    }

    // Check if account exists
    const existingAccount = await db
      .select()
      .from(blueSkeyAccountsTable)
      .where(eq(blueSkeyAccountsTable.userId, user.id));

    if (existingAccount.length === 0) {
      return {
        success: false,
        message: "No BlueSky account found for this user",
      };
    }

    // Delete the account
    await db
      .delete(blueSkeyAccountsTable)
      .where(eq(blueSkeyAccountsTable.userId, user.id));

    return {
      success: true,
      message: "BlueSky account deleted successfully",
    };
  } catch (error) {
    console.error("Error deleting BlueSky account:", error);
    return {
      success: false,
      message: "Failed to delete BlueSky account",
      data: error instanceof Error ? error.message : "Unknown error occurred",
    };
  }
};
