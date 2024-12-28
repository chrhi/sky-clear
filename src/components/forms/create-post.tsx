"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "../ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar as CalendarIcon, X } from "lucide-react";
// import { PostPayload } from "@/types";
import { postMultiplePosts } from "@/actions/bsky.actions";

const CreatePostForm = () => {
  const [threads, setThreads] = useState([
    {
      text: "",
      images: [] as File[],
      imagesPreviews: [] as string[],
    },
  ]);
  const [scheduledDate, setScheduledDate] = useState<Date>();

  const removeImage = (threadIndex: number, imageIndex: number) => {
    setThreads((prev) =>
      prev.map((thread, idx) => {
        if (idx === threadIndex) {
          const newImages = [...thread.images];
          const newPreviews = [...thread.imagesPreviews];
          newImages.splice(imageIndex, 1);
          newPreviews.splice(imageIndex, 1);
          return {
            ...thread,
            images: newImages,
            imagesPreviews: newPreviews,
          };
        }
        return thread;
      })
    );
  };

  const removeThread = (index: number) => {
    setThreads((prev) => prev.filter((_, idx) => idx !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const postPayload = {
      $type: "app.bsky.feed.post",
      text: threads[0].text,
      createdAt: scheduledDate
        ? scheduledDate.toISOString()
        : new Date().toISOString(),
    };

    console.log("Submitting post:", postPayload);

    await postMultiplePosts(postPayload);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col  mx-auto space-y-4 p-4"
    >
      {threads.map((thread, threadIndex) => (
        <div key={threadIndex} className="  flex-grow">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-muted-foreground">
              {threadIndex === 0 ? "New post" : `Thread ${threadIndex + 1}`}
            </span>
            {threadIndex > 0 && (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => removeThread(threadIndex)}
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>

          <Textarea
            value={thread.text}
            onChange={(e) =>
              setThreads((prev) =>
                prev.map((t, i) =>
                  i === threadIndex ? { ...t, text: e.target.value } : t
                )
              )
            }
            placeholder={
              threadIndex === 0 ? "What's happening?" : "Add to thread..."
            }
            className="min-h-[100px] resize-none mb-2"
          />

          {thread.imagesPreviews.length > 0 && (
            <div className="grid grid-cols-2 gap-2 mb-2">
              {thread.imagesPreviews.map((preview, imageIndex) => (
                <div key={imageIndex} className="relative">
                  <img
                    src={preview}
                    alt="Preview"
                    className="w-full h-40 object-cover rounded-lg"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute top-1 right-1 bg-black/50 hover:bg-black/70 p-1"
                    onClick={() => removeImage(threadIndex, imageIndex)}
                  >
                    <X className="h-4 w-4 text-white" />
                  </Button>
                </div>
              ))}
            </div>
          )}

          <div className="flex items-center justify-between">
            here i want to add emogies
          </div>
        </div>
      ))}

      <div className="flex items-center gap-2">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              <CalendarIcon className="h-4 w-4" />
              {scheduledDate ? format(scheduledDate, "PPp") : "Schedule"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={scheduledDate}
              onSelect={setScheduledDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>

      <div className="w-full h-[100px] flex items-center justify-end mt-auto">
        <Button type="submit" className=" button-primary">
          {scheduledDate ? "Schedule post" : "Post Now"}
        </Button>
      </div>
    </form>
  );
};

export default CreatePostForm;
