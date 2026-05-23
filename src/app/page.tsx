import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ScaleSection from "@/components/ScaleSection";
import SecuritySection from "@/components/SecuritySection";
import HardwareSection from "@/components/HardwareSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <ScaleSection />
      <SecuritySection />
      <HardwareSection />
      <CTASection />
      <Footer />
    </main>
  );
}
