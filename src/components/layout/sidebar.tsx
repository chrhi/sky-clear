"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { UserButton, useUser } from "@clerk/nextjs";
import {
  Workflow,
  Home,
  Settings,
  ChevronLeft,
  LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Compose from "../compose";

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
  { href: "/dashboard", icon: Home, text: "Queue" },
  { href: "/dashboard/my-posts", icon: Workflow, text: "My posts" },

  { href: "/dashboard/settings", icon: Settings, text: "Settings" },
];

const Sidebar = ({
  onClose,
  className,
}: {
  onClose?: () => void;
  className?: string;
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { user, isLoaded } = useUser();

  return (
    <div
      className={cn(
        "relative z-20 flex flex-col h-full bg-white/90 backdrop-blur-sm shadow-xl border-r border-gray-200 transition-all duration-300",
        isCollapsed ? "w-[72px] p-2" : "w-64 p-4",
        className
      )}
    >
      {/* User Profile Section */}
      <div className="mb-8">
        <div
          className={cn(
            "flex items-center space-x-4 p-2 rounded-lg transition-colors",
            "bg-gray-50/50 hover:bg-gray-100/50",
            isCollapsed ? "justify-center" : "justify-start"
          )}
        >
          {!isLoaded ? (
            <UserSkeleton />
          ) : (
            <>
              <div className="flex-shrink-0">
                <UserButton />
              </div>
              {!isCollapsed && (
                <div className="flex-1 min-w-0 overflow-hidden">
                  <p className="text-sm font-semibold text-gray-900 truncate">
                    {user?.fullName || user?.username}
                  </p>
                  <p className="text-xs text-gray-600 truncate">
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
                  `w-full group transition-all duration-200 ${
                    isCollapsed ? "justify-center" : "justify-start"
                  } flex items-center gap-x-3 rounded-lg px-3 py-2 text-sm font-medium`,
                  "text-gray-700 hover:bg-gray-100 hover:text-gray-900",
                  "focus:ring-2 focus:ring-gray-200 focus:outline-none"
                )}
                onClick={onClose}
              >
                <item.icon
                  className={cn(
                    "flex-shrink-0 transition-colors text-gray-500 group-hover:text-gray-700",
                    isCollapsed ? "w-6 h-6" : "w-5 h-5"
                  )}
                />
                {!isCollapsed && (
                  <span className="truncate max-w-[180px]">{item.text}</span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Compose />
      {/* Footer Section */}
      <div className="mt-auto pt-4 border-t border-gray-200">
        {/* Collapse Button */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={cn(
            "flex items-center justify-center w-full p-2 rounded-lg transition-all duration-300",
            "text-gray-500 hover:text-gray-700 hover:bg-gray-100/50",
            "focus:ring-2 focus:ring-gray-200 focus:outline-none"
          )}
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <ChevronLeft
            className={cn(
              "w-5 h-5 transition-transform duration-300",
              isCollapsed ? "rotate-180" : ""
            )}
          />
          {!isCollapsed && <span className="ml-2 text-sm">Collapse</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
