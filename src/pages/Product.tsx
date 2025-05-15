
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';

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
        
        {/* Product Tour */}
        <section className="section-padding bg-white">
          <div className="container-wide">
            <div className="text-center">
              <h2>Product Tour</h2>
              <p className="mt-4 mb-16 max-w-2xl mx-auto">
                Our AI-powered interview platform generates detailed candidate reports to help you make informed hiring decisions.
              </p>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-lg mb-16">
              <div className="w-full">
                <AspectRatio ratio={16 / 9} className="bg-recruit-lightgray">
                  <img 
                    src="/lovable-uploads/cb9cc1ae-4408-4cad-95c1-0b59eb6979cd.png" 
                    alt="Candidate Report Interface" 
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
              </div>
            </div>

            <div className="text-center mt-8">
              <h3 className="mb-6">Comprehensive Candidate Insights</h3>
              <p className="max-w-2xl mx-auto mb-8">
                Our detailed reports provide in-depth analysis of each candidate's skills, interview performance, 
                and AI-generated summaries to help you make the best hiring decisions.
              </p>
              <Button className="button-primary">
                Request a Demo
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Product;
