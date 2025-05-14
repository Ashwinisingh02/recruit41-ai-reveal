
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const Product = () => {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <main>
        {/* Product Hero */}
        <section className="pt-32 pb-24 relative overflow-hidden bg-recruit-lightgray">
          <div className="container-wide">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="mb-6">Transform Your Hiring Process</h1>
              <p className="text-xl text-recruit-gray mb-10 max-w-2xl mx-auto">
                Discover how our AI-powered interview platform helps you find the perfect candidates faster and more effectively.
              </p>
              <Button className="button-primary text-base" size="lg">
                Get Started
              </Button>
            </div>
          </div>
        </section>
        
        {/* Product Placeholder */}
        <section className="section-padding bg-white">
          <div className="container-wide">
            <div className="text-center">
              <h2>Product Tour</h2>
              <p className="mt-4 mb-16 max-w-2xl mx-auto">
                This page would contain a detailed product tour with interactive elements, 
                screenshots, and video demonstrations.
              </p>
            </div>
            
            <div className="bg-recruit-lightgray h-80 rounded-lg flex items-center justify-center mb-16">
              <p className="text-recruit-gray text-lg">Product Tour Visualization Placeholder</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Product;
