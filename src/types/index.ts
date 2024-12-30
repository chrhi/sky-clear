type PostFacet = {
  index: { start: number; end: number };
  features: Array<
    | { $type: "app.bsky.richtext.facet#mention"; did: string }
    | { $type: "app.bsky.richtext.facet#link"; uri: string }
  >;
};

type PostImage = {
  $type: "app.bsky.embed.images#image";
  alt: string;
  image: {
    $type: "blob";
    mimeType: string;
    ref: { $link: string };
    size: number;
  };
};

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

export type ActionResponse = {
  success: boolean;
  message: string;
  data?: any;
};
