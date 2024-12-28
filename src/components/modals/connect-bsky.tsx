"use client";

import * as React from "react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { ConnectAccountForm } from "../forms/connect-account";

export function ConnectBsky() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <div className="flex h-auto bg-gradient-to-br p-8 from-gray-50 via-white to-gray-100 border border-gray-200 shadow-lg my-8 py-8 max-w-md mx-auto rounded-xl flex-col gap-y-4 items-center justify-center w-full">
          <div className="flex flex-col items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-gray-400"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.317 3.608 1.293.976.976 1.23 2.243 1.293 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.317 2.633-1.293 3.608-.976.976-2.243 1.23-3.608 1.293-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.317-3.608-1.293-.976-.976-1.23-2.243-1.293-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.317-2.633 1.293-3.608.976-.976 2.243-1.23 3.608-1.293C8.416 2.175 8.796 2.163 12 2.163m0-2.163C8.735 0 8.332.015 7.052.072c-1.412.06-2.921.312-4.063 1.455C1.015 2.669.763 4.178.702 5.59.645 6.87.63 7.273.63 11s.015 4.13.072 5.41c.06 1.412.312 2.921 1.455 4.063 1.142 1.143 2.651 1.395 4.063 1.455 1.28.057 1.683.072 5.41.072s4.13-.015 5.41-.072c1.412-.06 2.921-.312 4.063-1.455 1.143-1.142 1.395-2.651 1.455-4.063.057-1.28.072-1.683.072-5.41s-.015-4.13-.072-5.41c-.06-1.412-.312-2.921-1.455-4.063-1.142-1.143-2.651-1.395-4.063-1.455C15.668.015 15.265 0 12 0z" />
              <circle cx="12" cy="12" r="3.2" />
              <circle cx="18.406" cy="5.594" r="1.44" />
            </svg>
            <h2 className="text-lg font-semibold text-gray-700">
              Nothing Connected
            </h2>
            <p className="text-sm text-center text-gray-500">
              Connect your blue sky to manage and share content seamlessly.
            </p>
          </div>
          <DialogTrigger>
            <button onClick={() => {}} className="button-primary">
              Connect bluesky
            </button>
          </DialogTrigger>
        </div>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Connect</DialogTitle>
            <DialogDescription>
              Connect your blue sky account to start secuduling posts.
            </DialogDescription>
          </DialogHeader>
          <ConnectAccountForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <div className="flex h-auto bg-gradient-to-br p-8 from-gray-50 via-white to-gray-100 border border-gray-200 shadow-lg my-8 py-8 max-w-md mx-auto rounded-xl flex-col gap-y-4 items-center justify-center w-full">
        <div className="flex flex-col items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-gray-400"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.317 3.608 1.293.976.976 1.23 2.243 1.293 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.317 2.633-1.293 3.608-.976.976-2.243 1.23-3.608 1.293-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.317-3.608-1.293-.976-.976-1.23-2.243-1.293-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.317-2.633 1.293-3.608.976-.976 2.243-1.23 3.608-1.293C8.416 2.175 8.796 2.163 12 2.163m0-2.163C8.735 0 8.332.015 7.052.072c-1.412.06-2.921.312-4.063 1.455C1.015 2.669.763 4.178.702 5.59.645 6.87.63 7.273.63 11s.015 4.13.072 5.41c.06 1.412.312 2.921 1.455 4.063 1.142 1.143 2.651 1.395 4.063 1.455 1.28.057 1.683.072 5.41.072s4.13-.015 5.41-.072c1.412-.06 2.921-.312 4.063-1.455 1.143-1.142 1.395-2.651 1.455-4.063.057-1.28.072-1.683.072-5.41s-.015-4.13-.072-5.41c-.06-1.412-.312-2.921-1.455-4.063-1.142-1.143-2.651-1.395-4.063-1.455C15.668.015 15.265 0 12 0z" />
            <circle cx="12" cy="12" r="3.2" />
            <circle cx="18.406" cy="5.594" r="1.44" />
          </svg>
          <h2 className="text-lg font-semibold text-gray-700">
            Nothing Connected
          </h2>
          <p className="text-sm text-center text-gray-500">
            Connect your blue sky to manage and share content seamlessly.
          </p>
        </div>
        <DrawerTrigger asChild>
          <button onClick={() => {}} className="button-primary">
            Connect bluesky
          </button>
        </DrawerTrigger>
      </div>

      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Edit profile</DrawerTitle>
          <DrawerDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DrawerDescription>
        </DrawerHeader>
        <ConnectAccountForm />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
