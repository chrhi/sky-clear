"use server";

import { db } from "@/db";
import { users } from "@/db/schema";
import { currentUser } from "@clerk/nextjs/server";

export async function syncUser() {
  try {
    // Fetch user from Clerk
    const clerkUser = await currentUser();

    if (!clerkUser) {
      return { failure: "User not found in Clerk" };
    }

    // Check if user already exists in our database
    const existingUser = await db.query.users.findFirst({
      where: (users, { eq }) => eq(users.clerkUserId, clerkUser.id),
    });

    if (existingUser) {
      return { success: existingUser };
    }

    // Create new user in our database
    const newUser = await db
      .insert(users)
      .values({
        clerkUserId: clerkUser.id,
      })
      .returning();

    return { success: newUser[0] };
  } catch (error) {
    console.error("Error syncing user:", error);
    return { failure: "Failed to sync user" };
  }
}

export async function getCurrentUser() {
  try {
    // Get the current authenticated Clerk user
    const clerkUser = await currentUser();

    if (!clerkUser) {
      return { failure: "No authenticated user" };
    }

    // Fetch user from our database
    const user = await db.query.users.findFirst({
      where: (users, { eq }) => eq(users.clerkUserId, clerkUser.id),
      with: {
        blueskyAccounts: true, // If you want to include related Bluesky accounts
      },
    });

    if (!user) {
      return { failure: "User not found in database" };
    }

    // Combine Clerk user data with our database user
    return {
      success: {
        ...user,
        email: clerkUser.emailAddresses[0]?.emailAddress,
        firstName: clerkUser.firstName,
        lastName: clerkUser.lastName,
        profileImageUrl: clerkUser.imageUrl,
      },
    };
  } catch (error) {
    console.error("Error getting current user:", error);
    return { failure: "Failed to retrieve user" };
  }
}
