
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="pt-28 pb-24 min-h-[80vh] flex items-center relative overflow-hidden bg-gradient-to-br from-orange-400 to-orange-500">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in text-white">
            <h1 className="mb-4 text-white">
              <span className="block text-4xl md:text-5xl lg:text-6xl font-bold mb-2">LeetCode style</span>
              <span className="block text-4xl md:text-5xl lg:text-6xl font-bold">interviews are broken!</span>
            </h1>
            <p className="text-xl md:text-2xl text-white font-light mb-8 max-w-lg">
              Revolutionize your hiring process with AI-powered interviews
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-orange-500 hover:bg-gray-100 text-base" size="lg">
                Start Free Trial
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 text-base" size="lg">
                Schedule Demo
              </Button>
            </div>
          </div>
          <div className="lg:relative lg:h-full flex items-center justify-center animate-scale-in">
            <div className="relative w-full max-w-md mx-auto bg-white p-4 rounded-lg border border-orange-200">
              {/* Partner logos row */}
              <div className="flex justify-center items-center gap-4 mb-8">
                {[1, 2, 3, 4, 5, 6].map((index) => (
                  <div key={index} className="w-10 h-10 bg-gray-200 rounded-md flex items-center justify-center">
                    <span className="text-xs text-gray-500">Logo</span>
                  </div>
                ))}
              </div>
              
              {/* Video/screenshot placeholder */}
              <div className="rounded-lg overflow-hidden border border-gray-100 bg-gray-50 h-48 flex items-center justify-center">
                <p className="text-gray-400">Platform Preview</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Secondary headline from Figma design */}
      <div className="absolute bottom-0 left-0 right-0 text-center pb-12 text-white">
        <h2 className="text-2xl md:text-3xl font-medium">
          Recruit41 elevates your hiring strategy from the ground up
        </h2>
      </div>
    </section>
  );
};

export default Hero;
