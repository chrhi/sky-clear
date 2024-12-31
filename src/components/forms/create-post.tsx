import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";
import TimePicker from "../modals/time-picker";
import { createPostAction } from "@/server/actions/pots.actions";

const CreatePostForm = () => {
  const [text, setText] = useState("");
  const [time, setTime] = useState<Date>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await createPostAction({
        text,
        time: time?.toString() ?? new Date().toString(),
      });

      // Clear form after successful submission
      setText("");
      setTime(undefined);
    } catch (error) {
      console.error("Failed to create post:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative h-full flex flex-col">
      <div className="flex-grow p-4">
        <span className="text-sm text-black font-bold mb-2 block">
          New post
        </span>
        <Textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="What's happening?"
          className="min-h-[100px] resize-none mb-2"
          disabled={isSubmitting}
        />
      </div>

      <div className="sticky bottom-0 w-full border-t p-4 flex gap-4 items-center justify-end">
        <TimePicker time={time} setTime={setTime} />
        <Button
          type="submit"
          className="w-32 button-primary"
          disabled={isSubmitting || !text.trim()}
        >
          {isSubmitting ? (
            <div className="flex items-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              {time ? "Scheduling..." : "Posting..."}
            </div>
          ) : time ? (
            "Schedule"
          ) : (
            "Post Now"
          )}
        </Button>
      </div>
    </form>
  );
};

export default CreatePostForm;
