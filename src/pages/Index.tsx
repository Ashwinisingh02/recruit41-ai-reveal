
import React from 'react';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Differentiators from '@/components/Differentiators';
import UseCases from '@/components/UseCases';
import Testimonials from '@/components/Testimonials';
import Founders from '@/components/Founders';
import Security from '@/components/Security';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';
import Features from '@/components/Features';
import PricingSection from '@/components/PricingSection';
import FeatureCards from '@/components/FeatureCards';
import StatsSection from '@/components/StatsSection';
import ProcessSection from '@/components/ProcessSection';

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background overflow-x-hidden">
        <NavBar />
        <main>
          <Hero />
          <StatsSection />
          <section id="how-it-works" className="scroll-mt-24">
            <HowItWorks />
          </section>
          <ProcessSection />
          <Differentiators />
          <FeatureCards />
          <Features />
          <UseCases />
          <section id="testimonials" className="scroll-mt-24">
            <Testimonials />
          </section>
          <PricingSection />
          <Founders />
          <Security />
          <CallToAction />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
