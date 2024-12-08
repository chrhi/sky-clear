import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import HeroSection from "@/components/landing-page/hero-section";
import InstagramFeaturesSection from "@/components/landing-page/features";
import PricingComponent from "@/components/landing-page/pricing";

const LandingPage = () => {
  return (
    <>
      <Header />
      <div className="bg-gradient-to-br pt-16 from-indigo-50 via-white to-purple-50 min-h-screen">
        {/* Hero Section */}
        <HeroSection />

        {/* Features Section */}
        <InstagramFeaturesSection />

        {/* Pricing Section */}
        <PricingComponent />

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-primary to-pink-600 text-white py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Instagram Strategy?
            </h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto">
              Start with our free tier and experience the power of AI-driven
              Instagram marketing.
            </p>
            <Link
              href="/signup"
              className="bg-white text-primary px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your Free Trial
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
