"use server";

import { agent } from "@/lib/bsky";

export const connectAgent = async ({
  identifier,
  password,
}: {
  identifier: string;
  password: string;
}) => {
  await agent.login({
    identifier,
    password,
  });
};

// Define the PostPayload type
export type PostPayload = {
  $type: "app.bsky.feed.post";
  text: string;
  createdAt: string;
  reply?: {
    parent: { uri: string; cid: string };
    root: { uri: string; cid: string };
  };
  facets?: PostFacet[];
  embed?: {
    $type: "app.bsky.embed.images";
    images: PostImage[];
  };
};

// Additional types for PostFacet and PostImage
export type PostFacet = {
  index: { byteStart: number; byteEnd: number };
  features: any[]; // You can specify feature types based on the API docs
};

export type PostImage = {
  image: string; // Blob reference
  alt: string; // Alternative text
};

// Server action function
export async function postMultiplePosts(postPayload: any) {
  await connectAgent({
    identifier: "chehri.bsky.social",
    password: "isserpubg123mahdi",
  });

  // Post each post in the array

  try {
    await agent.post(postPayload);
    console.log(`Posted successfully`);
  } catch (error) {
    console.error(`Failed to post`, error);
  }
}
