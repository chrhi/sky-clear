import React from "react";
import Link from "next/link";
import {
  RocketIcon,
  CheckCircle2Icon,
  PlayCircleIcon,
  ArrowRightIcon,
} from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-blue-50">
      {/* Background Decorator */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-blue-50 rounded-full opacity-20 animate-pulse" />
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-blue-100 rounded-full opacity-20 animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated Badge */}
          <div className="inline-flex items-center bg-blue-100 text-[#1da1f2] px-6 py-2 rounded-full mb-8 animate-bounce-slow hover:bg-blue-200 transition-colors duration-300">
            <RocketIcon className="w-5 h-5 mr-2 text-[#1da1f2]" />
            <span className="text-sm font-medium">
              AI-Powered Content Marketing
            </span>
          </div>

          {/* Headline with Dynamic Gradient */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#1da1f2] to-blue-600 mb-6 leading-tight tracking-tight">
            Automate your posts on blue sky with SkeyClear
          </h1>

          {/* Enhanced Subheadline */}
          <p className="text-lg sm:text-xl text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto">
            Revolutionize your blue sky strategy with AI-driven content that
            transforms interactions into meaningful connections and growth
            opportunities.
          </p>

          {/* Improved Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              href="/signup"
              className="w-full sm:w-auto button-primary text-white px-8 py-4 h-16 !rounded-full text-lg font-semibold 
               transition-all duration-300 group flex items-center justify-center
               "
            >
              <CheckCircle2Icon className="w-5 h-5 mr-2" />
              <span>Start Free Trial</span>
              <ArrowRightIcon className="w-5 h-5 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
            </Link>
            <Link
              href="/demo"
              className="w-full sm:w-auto border-2 border-[#1da1f2] text-[#1da1f2] px-8 py-4 rounded-full
              text-lg font-semibold hover:bg-blue-50 transition-all duration-300 group
              flex items-center justify-center"
            >
              <PlayCircleIcon className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              <span>Watch Demo</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
