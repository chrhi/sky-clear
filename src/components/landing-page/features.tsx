import {
  InstagramIcon,
  MessageCircleIcon,
  TrendingUpIcon,
  TargetIcon,
  ZapIcon,
  HeartIcon,
} from "lucide-react";

const InstagramFeaturesSection = () => {
  const features = [
    {
      icon: <MessageCircleIcon className="w-12 h-12 text-pink-500" />,
      title: "Smart DM Automation",
      description:
        "Intelligent direct message responses that sound authentically human",
      color: "from-pink-500 to-rose-500",
      size: "md:col-span-2 md:row-span-2",
    },
    {
      icon: <TrendingUpIcon className="w-12 h-12 text-purple-500" />,
      title: "Engagement Analytics",
      description: "Comprehensive insights into your Instagram performance",
      color: "from-purple-500 to-indigo-500",
      size: "md:col-span-1",
    },
    {
      icon: <TargetIcon className="w-12 h-12 text-green-500" />,
      title: "Audience Targeting",
      description: "Precision targeting of your ideal Instagram followers",
      color: "from-green-500 to-emerald-500",
      size: "md:col-span-1",
    },
    {
      icon: <ZapIcon className="w-12 h-12 text-orange-500" />,
      title: "Instant Content Optimization",
      description:
        "AI-powered suggestions for hashtags, captions, and posting times",
      color: "from-orange-500 to-amber-500",
      size: "md:col-span-2",
    },
    {
      icon: <HeartIcon className="w-12 h-12 text-red-500" />,
      title: "Engagement Booster",
      description:
        "Intelligent interaction strategies to increase followers and likes",
      color: "from-red-500 to-pink-500",
      size: "md:col-span-1",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-purple-50 py-16">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-pink-100 text-pink-800 px-4 py-2 rounded-full mb-4">
            <InstagramIcon className="w-5 h-5 mr-2" />
            <span className="text-sm font-medium">
              Instagram-Exclusive Features
            </span>
          </div>
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 mb-4">
            Instagram Growth, Reimagined
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Unlock the full potential of your Instagram presence with AI-powered
            marketing intelligence.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`
                                ${feature.size} 
                                bg-white border border-gray-100 
                                rounded-2xl shadow-lg overflow-hidden 
                                transform transition-all duration-300 
                                hover:scale-105 hover:shadow-xl
                                relative group
                            `}
            >
              {/* Gradient Overlay */}
              <div
                className={`
                                    absolute inset-0 
                                    bg-gradient-to-br ${feature.color} 
                                    opacity-10 
                                    pointer-events-none
                                `}
              ></div>

              {/* Feature Content */}
              <div className="p-8 relative z-10">
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a
                    href="#"
                    className="text-pink-600 font-semibold hover:underline"
                  >
                    Learn More →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <a
            href="/signup"
            className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:from-pink-700 hover:to-purple-700 transition-all"
          >
            Start Your Instagram Transformation
          </a>
        </div>
      </div>
    </div>
  );
};

export default InstagramFeaturesSection;
