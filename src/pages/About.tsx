
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <main>
        {/* About Hero */}
        <section className="pt-32 pb-24 relative overflow-hidden bg-recruit-lightgray dark:bg-gray-900">
          <div className="container-wide">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="mb-6">About Recruit41</h1>
              <p className="text-xl text-recruit-gray mb-10 max-w-2xl mx-auto">
                We're on a mission to transform the recruitment industry with AI-powered innovation.
              </p>
            </div>
          </div>
        </section>
        
        {/* About Placeholder */}
        <section className="section-padding bg-white">
          <div className="container-wide">
            <div className="text-center">
              <h2>Our Story</h2>
              <p className="mt-4 mb-16 max-w-2xl mx-auto">
                This page would contain information about the company, team, values, and vision.
              </p>
            </div>
            
            <div className="bg-recruit-lightgray h-80 rounded-lg flex items-center justify-center mb-16">
              <p className="text-recruit-gray text-lg">About Page Content Placeholder</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
