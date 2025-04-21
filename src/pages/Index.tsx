
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import AboutSection from "@/components/sections/AboutSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";
import CtaSection from "@/components/sections/CtaSection";
import BackToTopButton from "@/components/ui/BackToTopButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-dark-bg text-white">
      <Navbar />
      
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <PortfolioSection />
        <TestimonialsSection />
        <CtaSection />
        <ContactSection />
      </main>
      
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default Index;
