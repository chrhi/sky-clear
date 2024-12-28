"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import CreatePostForm from "./forms/create-post";

export default function Compose() {
  return (
    <Sheet>
      <SheetTrigger>
        <Button className="button-primary w-full flex items-center justify-center my-4">
          Create post
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Create new post</SheetTitle>
        </SheetHeader>

        <CreatePostForm />
      </SheetContent>
    </Sheet>
  );
}
