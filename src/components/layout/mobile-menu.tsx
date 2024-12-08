/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Modal } from "@/components/ui/modal";
import { useState } from "react";
import Sidebar from "./sidebar";
import { Menu } from "lucide-react";

export function MobileMenuButton() {
  const [_, setIsDrawerOpen] = useState(false);

  return (
    <button
      onClick={() => setIsDrawerOpen(true)}
      className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
    >
      <Menu className="w-6 h-6 text-gray-700" />
    </button>
  );
}

export function MobileDrawer() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <Modal
      className="p-0 w-full"
      showModal={isDrawerOpen}
      setShowModal={setIsDrawerOpen}
    >
      <Sidebar
        className="w-full max-w-full"
        onClose={() => setIsDrawerOpen(false)}
      />
    </Modal>
  );
}
