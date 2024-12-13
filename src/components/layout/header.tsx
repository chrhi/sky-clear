import Link from "next/link";
import { GiftIcon, LogInIcon } from "lucide-react";

export const Header = () => {
  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <span className="text-2xl font-bold text-blue-500">Sky Clear</span>
          </Link>

          {/* Auth Buttons */}
          <div className="flex space-x-4">
            <Link
              href="/sign-in"
              className="
                flex items-center
                text-blue-600 
                hover:bg-rose-50 
                px-4 py-2 
                rounded-full 
                transition-colors
                border border-primary-100
                font-semibold
              "
            >
              <LogInIcon className="w-5 h-5 mr-2" />
              Sign In
            </Link>
            <Link
              href="/sign-up"
              className="
                button-primary !flex !items-center !justify-center !gap-2
              "
            >
              Start Free Trial
              <GiftIcon className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
