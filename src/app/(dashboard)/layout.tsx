import { PropsWithChildren } from "react";

import {
  MobileDrawer,
  MobileMenuButton,
} from "@/components/layout/mobile-menu";
import Sidebar from "@/components/layout/sidebar";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="relative h-screen flex flex-col md:flex-row bg-gray-50/50 overflow-hidden">
      <div className="hidden md:block transition-all duration-300 h-full relative z-10">
        <Sidebar />
      </div>

      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="md:hidden flex items-center justify-between p-4 bg-white border-b border-gray-200">
          <p className="text-lg font-semibold text-gray-900">
            <span className="text-gray-600">AutomationHub</span>
          </p>
          <MobileMenuButton />
        </div>

        <div className="flex-1 overflow-y-auto bg-white shadow-sm relative z-10">
          <div className="relative h-full flex flex-col ">
            <div className="h-full flex flex-col flex-1 space-y-4">
              {children}
            </div>
          </div>
        </div>

        <MobileDrawer />
      </div>
    </div>
  );
}
