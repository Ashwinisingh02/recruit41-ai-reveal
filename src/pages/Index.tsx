
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

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        <NavBar />
        <main>
          <Hero />
          <section id="how-it-works" className="scroll-mt-24">
            <HowItWorks />
          </section>
          <Differentiators />
          <UseCases />
          <section id="testimonials" className="scroll-mt-24">
            <Testimonials />
          </section>
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
