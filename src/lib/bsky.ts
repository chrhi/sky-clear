import { BskyAgent } from "@atproto/api";

export const agent = new BskyAgent({
  service: "https://bsky.social",
});

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

export async function makePost(postPayload: any) {
  await connectAgent({
    identifier: "chehri.bsky.social",
    password: "isserpubg123mahdi",
  });

  try {
    await agent.post(postPayload);
    console.log(`Posted successfully`);
  } catch (error) {
    console.error(`Failed to post`, error);
  }
}
