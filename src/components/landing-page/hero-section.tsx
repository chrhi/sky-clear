import Link from "next/link";
import {
  RocketIcon,
  CheckCircle2Icon,
  PlayCircleIcon,
  ArrowRightIcon,
  ZapIcon,
  MessageCircleIcon,
} from "lucide-react";

const Hebluection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="container mx-auto px-6 pt-24 pb-16 lg:flex items-center justify-between relative z-10">
        {/* Left Content Section */}
        <div className="lg:w-1/2 mb-12 lg:mb-0 relative">
          {/* Animated Badge */}
          <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6 animate-bounce-slow">
            <RocketIcon className="w-5 h-5 mr-2 text-blue-600" />
            <span className="text-sm font-medium">
              AI-Powered Instagram Marketing
            </span>
          </div>

          {/* Headline with Gradient */}
          <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-600 mb-7 leading-tight tracking-tight">
            Supercharge Your Instagram Engagement
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-gray-600 max-w-xl mb-10 leading-relaxed">
            Revolutionize your Instagram strategy with AI-driven messaging that
            transforms interactions into meaningful connections and growth
            opportunities.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
            <Link
              href="/signup"
              className="bg-blue-500 text-white px-10 py-4 rounded-full text-lg font-semibold 
              hover:bg-blue-600 transition-all duration-300 group flex items-center justify-center 
              shadow-xl shadow-blue-200 hover:shadow-blue-300 hover:-translate-y-1"
            >
              <CheckCircle2Icon className="w-5 h-5 mr-2" />
              Start Free Trial
              <ArrowRightIcon className="w-5 h-5 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <Link
              href="/demo"
              className="border-2 border-blue-500 text-blue-700 px-10 py-4 rounded-full 
              text-lg font-semibold hover:bg-blue-50 transition-all duration-300 group 
              flex items-center justify-center"
            >
              <PlayCircleIcon className="w-5 h-5 mr-2" />
              Watch Demo
            </Link>
          </div>

          {/* Social Proof */}
          <div className="flex items-center space-x-4">
            <div className="flex -space-x-3">
              <img
                src="/api/placeholder/40/40"
                alt="User"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="/api/placeholder/40/40"
                alt="User"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="/api/placeholder/40/40"
                alt="User"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-700">
                5000+ Businesses Trusted
              </p>
              <div className="flex text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <ZapIcon key={i} className="w-4 h-4 fill-current" />
                ))}
                <span className="text-xs text-gray-600 ml-2">(4.9/5)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Demo Section */}
        <div className="lg:w-1/2 relative">
          <div className="bg-white rounded-3xl shadow-2xl p-5 transform transition-all duration-300 hover:scale-105 hover:shadow-3xl">
            <div className="bg-gray-100 rounded-2xl overflow-hidden relative">
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-pink-600 opacity-10"></div>

              {/* Placeholder Image */}
              <img
                src="/api/placeholder/600/400"
                alt="InstaAI Dashboard"
                className="w-full h-[450px] object-cover"
              />

              {/* Overlay Information */}
              <div className="absolute bottom-5 left-5 right-5">
                <div className="bg-white/90 backdrop-blur-md rounded-xl p-4 shadow-lg flex items-center justify-between">
                  <div className="flex items-center">
                    <MessageCircleIcon className="w-8 h-8 text-blue-500 mr-3" />
                    <div>
                      <h3 className="font-bold text-gray-800">
                        AI Instagram Insights
                      </h3>
                      <p className="text-xs text-gray-600">
                        Real-time engagement tracking
                      </p>
                    </div>
                  </div>
                  <PlayCircleIcon className="w-10 h-10 text-blue-500" />
                </div>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute -top-12 -right-12 bg-white shadow-2xl rounded-full p-4 animate-float">
            <RocketIcon className="w-9 h-9 text-blue-500" />
          </div>
          <div className="absolute -bottom-12 -left-12 bg-white shadow-2xl rounded-full p-4 animate-float-delay">
            <CheckCircle2Icon className="w-9 h-9 text-green-600" />
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-100 rounded-full opacity-50 blur-3xl"></div>
      </div>
    </div>
  );
};

export default Hebluection;
