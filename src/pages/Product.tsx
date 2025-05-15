
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
                {/* Force image display with explicit dimensions and fallback styling */}
                <AspectRatio ratio={16 / 9} className="bg-recruit-lightgray">
                  <img 
                    src="/lovable-uploads/cb9cc1ae-4408-4cad-95c1-0b59eb6979cd.png" 
                    alt="Candidate Report Interface" 
                    className="w-full h-full object-contain"
                    style={{ maxHeight: '600px' }}
                    onError={(e) => {
                      console.error('Image failed to load');
                      e.currentTarget.style.display = 'none';
                    }}
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
        
        {/* Process Section */}
        <section className="section-padding bg-recruit-lightgray">
          <div className="container-wide">
            <div className="text-center mb-16">
              <h2 className="mb-6">How It Works</h2>
              <p className="max-w-2xl mx-auto">
                Our streamlined process makes technical hiring efficient and effective,
                giving you confidence in your hiring decisions.
              </p>
            </div>
            
            {/* Step 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24 animate-fade-in">
              <div>
                <div className="inline-block bg-orange-100 text-orange-500 p-2 rounded-full mb-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-500 text-white font-bold">1</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-medium mb-6">Create & Customize Your Interview</h3>
                <p className="text-lg text-recruit-gray mb-8 leading-relaxed">
                  Design comprehensive technical interview plans in minutes, not hours. Our platform offers pre-built templates for various roles and levels, with fully customizable questions and scoring criteria.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-md">
                <div className="aspect-[4/3] bg-gray-50 rounded-lg p-6">
                  <div className="mb-6">
                    <h4 className="text-xl font-medium mb-2">Frontend Developer Interview</h4>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="flex items-center mr-4"><span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span> Active</span>
                      <span>Duration: 60 min</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="p-3 bg-gray-100 rounded-md border border-gray-200">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-sm">JavaScript Fundamentals</span>
                        <span className="text-xs text-gray-500">15 min</span>
                      </div>
                    </div>
                    <div className="p-3 bg-gray-100 rounded-md border border-gray-200">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-sm">React Components</span>
                        <span className="text-xs text-gray-500">20 min</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24 animate-fade-in">
              <div className="order-2 md:order-1 bg-white p-8 rounded-2xl shadow-md">
                <div className="aspect-[4/3] bg-gray-50 rounded-lg p-6">
                  <div className="mb-6">
                    <h4 className="text-xl font-medium mb-2">Candidate Scheduling</h4>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="flex items-center mr-4"><span className="w-2 h-2 bg-blue-500 rounded-full mr-1"></span> Available</span>
                      <span>4 Slots Today</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="p-3 bg-gray-100 rounded-md border border-gray-200">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-sm">10:00 AM - 11:00 AM</span>
                        <span className="text-xs text-blue-500">Available</span>
                      </div>
                    </div>
                    <div className="p-3 bg-gray-100 rounded-md border border-gray-200">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-sm">1:30 PM - 2:30 PM</span>
                        <span className="text-xs text-blue-500">Available</span>
                      </div>
                    </div>
                    <div className="p-3 bg-orange-50 rounded-md border border-orange-100">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-sm">4:00 PM - 5:00 PM</span>
                        <span className="text-xs text-orange-500">Booked</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="inline-block bg-orange-100 text-orange-500 p-2 rounded-full mb-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-500 text-white font-bold">2</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-medium mb-6">Invite Candidates & Schedule</h3>
                <p className="text-lg text-recruit-gray mb-8 leading-relaxed">
                  Seamlessly invite candidates to your custom technical assessments. Our scheduling system integrates with your calendar and sends automated reminders to ensure candidates are prepared and on time.
                </p>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center animate-fade-in">
              <div>
                <div className="inline-block bg-orange-100 text-orange-500 p-2 rounded-full mb-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-500 text-white font-bold">3</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-medium mb-6">Review AI-Powered Insights</h3>
                <p className="text-lg text-recruit-gray mb-8 leading-relaxed">
                  Our AI analyzes candidate performance across multiple dimensions, providing objective scoring and detailed insights. Compare candidates side-by-side and make data-driven hiring decisions with confidence.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <div className="rounded-lg overflow-hidden">
                  <AspectRatio ratio={16 / 9} className="bg-recruit-lightgray">
                    <img 
                      src="/lovable-uploads/cb9cc1ae-4408-4cad-95c1-0b59eb6979cd.png" 
                      alt="Candidate Report Insights" 
                      className="w-full h-full object-contain"
                      style={{ maxHeight: '400px' }}
                      onError={(e) => {
                        console.error('Image failed to load');
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </AspectRatio>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Product;
