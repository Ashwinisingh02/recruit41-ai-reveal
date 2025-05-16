
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-28 pb-24 md:pt-36 md:pb-36 min-h-[90vh] flex items-center relative overflow-hidden bg-gradient-to-br from-orange-500 to-orange-600">
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 to-transparent opacity-30"></div>
      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in text-white">
            <h1 className="mb-6 text-white">
              <span className="block text-4xl md:text-5xl lg:text-6xl font-bold mb-4">LeetCode style</span>
              <span className="block text-4xl md:text-5xl lg:text-6xl font-bold">interviews are broken!</span>
            </h1>
            <p className="text-xl md:text-2xl text-white font-light mb-10 max-w-lg leading-relaxed">
              Our AI-powered platform streamlines technical interviews, finds the right talent faster, and reduces bias in the hiring process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-orange-500 hover:bg-gray-100 text-base font-medium hover-lift" size="lg">
                Start Free Trial
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 text-base hover-lift" size="lg">
                Schedule Demo <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="lg:relative lg:h-full flex items-center justify-center animate-scale-in">
            <div className="relative w-full max-w-md mx-auto hover-lift hover-glow">
              {/* Platform preview card with shadow */}
              <div className="bg-white p-6 rounded-xl shadow-xl border border-orange-100">
                {/* Partner logos row */}
                <div className="flex justify-center items-center gap-4 mb-6">
                  {['Google', 'Meta', 'Amazon', 'Apple', 'Microsoft', 'Uber'].map((company, index) => (
                    <div key={index} className="w-10 h-10 bg-gray-100 rounded-md flex items-center justify-center">
                      <span className="text-xs text-gray-600 font-medium">{company.charAt(0)}</span>
                    </div>
                  ))}
                </div>
                
                {/* Video/screenshot placeholder */}
                <div className="rounded-lg overflow-hidden border border-gray-100 mb-6">
                  <AspectRatio ratio={16/9} className="bg-gray-50">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
                          <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-gray-500 font-medium">Platform Demo</p>
                    </div>
                  </AspectRatio>
                </div>
                
                {/* Stats row */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-2 bg-orange-50 rounded-lg">
                    <p className="text-lg font-bold text-orange-500">87%</p>
                    <p className="text-xs text-gray-500">Better Hires</p>
                  </div>
                  <div className="text-center p-2 bg-orange-50 rounded-lg">
                    <p className="text-lg font-bold text-orange-500">65%</p>
                    <p className="text-xs text-gray-500">Time Saved</p>
                  </div>
                  <div className="text-center p-2 bg-orange-50 rounded-lg">
                    <p className="text-lg font-bold text-orange-500">93%</p>
                    <p className="text-xs text-gray-500">Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Secondary headline with enhanced visual */}
      <div className="absolute bottom-0 left-0 right-0 text-center pb-12 text-white">
        <div className="bg-black/20 backdrop-blur-sm py-4">
          <h2 className="text-2xl md:text-3xl font-medium">
            Recruit41 elevates your hiring strategy from the ground up
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
