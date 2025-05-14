
import React from 'react';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import SocialProof from '@/components/SocialProof';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <main>
        <Hero />
        <Features />
        <SocialProof />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
