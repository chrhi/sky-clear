"use client";

import { buttonVariants } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
import { cn } from "@/lib/utils";
import { UserButton, useUser } from "@clerk/nextjs";
import {
  Box,
  Home,
  Settings,
  Package,
  ChevronLeft,
  Menu,
  LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { PropsWithChildren, useState } from "react";

interface SidebarItem {
  href: string;
  icon: LucideIcon;
  text: string;
}

const UserSkeleton = () => (
  <div className="flex items-center space-x-4">
    <div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse" />
    <div className="flex-1 min-w-0 space-y-2">
      <div className="h-4 bg-gray-200 rounded animate-pulse w-24" />
      <div className="h-3 bg-gray-200 rounded animate-pulse w-32" />
    </div>
  </div>
);

const SIDEBAR_ITEMS: SidebarItem[] = [
  { href: "/", icon: Home, text: "Home" },
  { href: "/orders", icon: Package, text: "Orders" },
  { href: "/apps", icon: Box, text: "Apps" },
  { href: "/settings", icon: Settings, text: "Settings" },
];

const Sidebar = ({ onClose }: { onClose?: () => void }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { user, isLoaded } = useUser();

  return (
    <div
      className={cn(
        "relative z-20 flex flex-col h-full bg-white shadow-lg transition-all duration-300",
        isCollapsed ? "p-2" : "p-4"
      )}
    >
      {/* User Profile Section */}
      <div className="mb-8">
        <div className="flex items-center space-x-4 p-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors min-h-[60px]">
          {!isLoaded ? (
            <UserSkeleton />
          ) : (
            <>
              <div className="flex-shrink-0">
                <UserButton />
              </div>
              {!isCollapsed && (
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {user?.fullName || user?.username}
                  </p>
                  <p className="text-xs text-gray-500 truncate">
                    {user?.primaryEmailAddress?.emailAddress}
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Navigation Items */}
      <div className="flex-grow">
        <ul className="space-y-2">
          {SIDEBAR_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  `w-full  group ${
                    isCollapsed ? "justify-center" : "justify-start"
                  } flex items-center gap-x-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors`
                )}
                onClick={onClose}
              >
                <item.icon
                  className={`flex-shrink-0 transition-colors ${
                    isCollapsed ? "w-8 h-8" : "w-5 h-5"
                  } `}
                />
                {!isCollapsed && item.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer Section */}
      <div className="mt-auto pt-4 border-t border-gray-200">
        {/* Collapse Button */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="mt-4 flex items-center justify-center w-full p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <ChevronLeft
            className={cn(
              ` 
                w-5 h-5
               transition-transform duration-300`,
              isCollapsed && "rotate-180"
            )}
          />
        </button>
      </div>
    </div>
  );
};

const Layout = ({ children }: PropsWithChildren) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="relative h-screen flex flex-col md:flex-row bg-gray-50 overflow-hidden">
      {/* Desktop Sidebar */}
      <div className="hidden md:block transition-all duration-300 border-r border-gray-200 h-full relative z-10">
        <Sidebar />
      </div>

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between p-4 bg-white border-b border-gray-200">
          <p className="text-lg font-semibold text-gray-900">
            <span className="text-blue-600">Embraturia</span>
          </p>
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto bg-white shadow-sm relative z-10">
          <div className="relative min-h-full flex flex-col p-6">
            <div className="h-full flex flex-col flex-1 space-y-4">
              {children}
            </div>
          </div>
        </div>

        {/* Mobile Drawer */}
        <Modal
          className="p-0"
          showModal={isDrawerOpen}
          setShowModal={setIsDrawerOpen}
        >
          <Sidebar onClose={() => setIsDrawerOpen(false)} />
        </Modal>
      </div>
    </div>
  );
};

export default Layout;
