"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { GiftIcon, SnowflakeIcon, LogInIcon } from "lucide-react";

export const ChristmasDealBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set the date we're counting down to (Christmas Day)
    const countDownDate = new Date("Dec 25, 2024 00:00:00").getTime();

    // Update the count down every 1 second
    const interval = setInterval(() => {
      // Get today's date and time
      const now = new Date().getTime();

      // Find the distance between now and the count down date
      const distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      // If the count down is finished
      if (distance < 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-r from-red-600 to-green-600 text-white py-2 px-4 text-center relative overflow-hidden">
      <div className="flex justify-center items-center space-x-2">
        <SnowflakeIcon className="w-5 h-5" />
        <span className="font-bold">🎄 Christmas Mega Sale: Ends In</span>
        <div className="flex space-x-1 ml-4">
          <div className="bg-white text-red-600 px-2 py-1 rounded font-bold">
            {timeLeft.days}
            <span className="text-xs ml-1">D</span>
          </div>
          <div className="bg-white text-red-600 px-2 py-1 rounded font-bold">
            {timeLeft.hours}
            <span className="text-xs ml-1">H</span>
          </div>
          <div className="bg-white text-red-600 px-2 py-1 rounded font-bold">
            {timeLeft.minutes}
            <span className="text-xs ml-1">M</span>
          </div>
          <div className="bg-white text-red-600 px-2 py-1 rounded font-bold">
            {timeLeft.seconds}
            <span className="text-xs ml-1">S</span>
          </div>
        </div>
        <GiftIcon className="w-5 h-5 ml-2" />
      </div>
    </div>
  );
};

export const Header = () => {
  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <SnowflakeIcon className="w-8 h-8 text-primary-600" />
            <span className="text-2xl font-bold text-gray-800">InstaAI</span>
          </Link>

          {/* Auth Buttons */}
          <div className="flex space-x-4">
            <Link
              href="/sign-in"
              className="
                flex items-center
                text-rose-600 
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
                flex items-center
                bg-gradient-to-r 
                from-rose-600 
                to-rose-700 
                text-white 
                px-6 
                py-2 
                rounded-full 
                hover:from-rose-700 
                hover:to-rose-800 
                transition-all
                font-semibold
                shadow-md
                hover:shadow-lg
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
