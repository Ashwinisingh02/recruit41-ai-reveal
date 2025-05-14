
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="pt-28 pb-24 min-h-[90vh] flex items-center relative overflow-hidden hero-gradient">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="mb-4">
              <span className="block text-recruit-dark">Recruit41: </span>
              <span className="text-recruit-blue">Right Talent, Every Time</span>
            </h1>
            <p className="text-xl md:text-2xl text-recruit-gray font-light mb-8 max-w-lg">
              Revolutionize your hiring process with AI-powered interviews
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="button-primary text-base" size="lg">
                Start Hiring Smarter
              </Button>
              <Button variant="outline" className="button-secondary text-base" size="lg">
                Schedule Demo
              </Button>
            </div>
          </div>
          <div className="lg:relative lg:h-full flex items-center justify-center animate-scale-in">
            <div className="relative w-full max-w-md mx-auto">
              {/* Video player with Apple-like design */}
              <div className="rounded-xl overflow-hidden shadow-lg bg-recruit-blue/5 border border-gray-200/50 backdrop-blur">
                <video 
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                  className="w-full rounded-lg"
                >
                  <source src="https://cdn.plyr.io/static/blank.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-white">
                  <p className="font-medium">Demo Video Placeholder</p>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -right-12 -top-6 w-24 h-24 bg-recruit-accent/10 rounded-full blur-2xl"></div>
              <div className="absolute -left-8 bottom-8 w-20 h-20 bg-recruit-blue/10 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
      {/* Background gradient circles */}
      <div className="hidden lg:block absolute top-32 -right-32 w-96 h-96 bg-recruit-blue/5 rounded-full blur-3xl"></div>
      <div className="hidden lg:block absolute -bottom-48 -left-48 w-96 h-96 bg-recruit-accent/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;
