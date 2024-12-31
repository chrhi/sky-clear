import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import HeroSection from "@/components/landing-page/hero-section";
import InstagramFeaturesSection from "@/components/landing-page/features";
import PricingComponent from "@/components/landing-page/pricing";

const LandingPage = () => {
  return (
    <>
      <Header />
      <div className="bg-gradient-to-br pt-16  min-h-screen">
        {/* Hero Section */}
        <HeroSection />

        {/* Features Section */}
        <InstagramFeaturesSection />

        {/* Pricing Section */}
        <PricingComponent />
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
