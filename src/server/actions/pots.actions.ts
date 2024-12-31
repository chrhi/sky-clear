"use server";
import { db } from "@/db";
import { postTable } from "@/db/schema";
import { serverAction } from "@/server/__internals";
import { z } from "zod";

const PostSchema = z.object({
  text: z.string(),
  time: z.string(),
});

export const createPostAction = async (data: z.infer<typeof PostSchema>) => {
  return serverAction.protectedAction(async () => {
    const validationResult = serverAction.validateInput(
      PostSchema,
      data,
      "createPost"
    );

    if ("success" in validationResult && !validationResult.success) {
      return validationResult;
    }
    const post: typeof postTable.$inferInsert = {
      userId: serverAction.user!.id,
      text: data.text,
      scheduledOn: data.time.toString(),
    };

    await db.insert(postTable).values(post);

    return {
      success: true,
      message: "Post created successfully",
    };
  }, "createPost");
};

// get all posts

// export const getAllPostsAction = async () => {

//   return serverAction.protectedAction(async () => {

//   } , "get-all-posts")
// }
