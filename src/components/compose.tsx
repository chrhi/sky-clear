"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
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
      <SheetContent className="!h-full flex flex-col justify-between ">
        <CreatePostForm />
      </SheetContent>
    </Sheet>
  );
}
