
import React from 'react';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="container-wide relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-6">Ready to transform your recruitment process?</h2>
          <p className="text-xl text-recruit-gray mb-10">
            Join hundreds of companies already hiring smarter with Recruit41's AI-powered platform.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="button-primary text-base" size="lg">
              Start Free Trial
            </Button>
            <Button variant="outline" className="button-secondary text-base" size="lg">
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
      
      {/* Background gradient elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-30">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-recruit-blue/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-recruit-accent/20 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default CallToAction;
