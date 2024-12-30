"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
//import { postMultiplePosts } from "@/actions/bsky.actions";
import TimePicker from "../modals/time-picker";

const CreatePostForm = () => {
  const [text, setText] = useState("");

  const [time, setTime] = useState<Date>();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // const postPayload = {
    //   $type: "app.bsky.feed.post",
    //   text,
    //   createdAt: new Date().toISOString(),
    // };
    // await postMultiplePosts(postPayload);

    console.log({
      text,
      time,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="relative h-full  flex flex-col">
      <div className="flex-grow p-4">
        <span className="text-sm text-black font-bold mb-2 block">
          New post
        </span>
        <Textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="What's happening?"
          className="min-h-[100px] resize-none mb-2"
        />
      </div>

      <div className="sticky bottom-0 w-full border-t  p-4 flex gap-4 items-center justify-end">
        <TimePicker time={time} setTime={setTime} />
        <Button type="submit" className="w-32 button-primary">
          {time ? "Schedule" : "Post Now"}
        </Button>
      </div>
    </form>
  );
};

export default CreatePostForm;
