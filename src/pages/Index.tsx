import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import HighlightSection from "@/components/HighlightSection";
import CoursesSection from "@/components/CoursesSection";
import FeaturesSection from "@/components/FeaturesSection";
import ResultsSection from "@/components/ResultsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTABanner from "@/components/CTABanner";
import DemoBookingModal from "@/components/DemoBookingModal";

const Index = () => {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <>
      <HeroSection onBookDemo={() => setDemoOpen(true)} />
      <HighlightSection />
      <CoursesSection />
      <FeaturesSection />
      <ResultsSection />
      <TestimonialsSection />
      <CTABanner onBookDemo={() => setDemoOpen(true)} />
      <DemoBookingModal open={demoOpen} onOpenChange={setDemoOpen} />
    </>
  );
};

export default Index;
