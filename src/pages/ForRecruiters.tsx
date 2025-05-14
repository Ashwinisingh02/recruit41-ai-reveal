
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const ForRecruiters = () => {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <main>
        {/* Recruiters Hero */}
        <section className="pt-32 pb-24 relative overflow-hidden bg-recruit-lightgray">
          <div className="container-wide">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="mb-6">Built For Modern Recruiters</h1>
              <p className="text-xl text-recruit-gray mb-10 max-w-2xl mx-auto">
                Discover how our platform solves the most challenging problems faced by today's recruitment professionals.
              </p>
            </div>
          </div>
        </section>
        
        {/* Recruiters Placeholder */}
        <section className="section-padding bg-white">
          <div className="container-wide">
            <div className="text-center">
              <h2>For Recruiters</h2>
              <p className="mt-4 mb-16 max-w-2xl mx-auto">
                This page would contain information specifically tailored for recruiters, 
                including pain points solved and ROI calculator.
              </p>
            </div>
            
            <div className="bg-recruit-lightgray h-80 rounded-lg flex items-center justify-center mb-16">
              <p className="text-recruit-gray text-lg">Recruiters Page Content Placeholder</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ForRecruiters;
