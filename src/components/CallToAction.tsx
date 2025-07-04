import React from 'react';
import { Button } from '@/components/ui/button';
const CallToAction = () => {
  return <section className="py-20 bg-gradient-to-br from-orange-500 to-orange-600 dark:from-gray-800 dark:to-gray-900 bg-orange-500">
      <div className="container-wide">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-6 text-orange-50 md:text-4xl">Let's Rethink Hiring Together</h2>
          <p className="text-xl md:text-2xl mb-10 text-slate-50">Modular. Intelligent. Human-centric.</p>
          
          <Button size="lg" className="bg-white text-orange-500 hover:bg-gray-100 dark:bg-gray-800 dark:text-orange-400 dark:hover:bg-gray-700 text-base px-8">
            Book a Demo
          </Button>
        </div>
      </div>
    </section>;
};
export default CallToAction;