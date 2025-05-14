
import React from 'react';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="container-wide relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-medium mb-6 text-white">Recruit41 is live & delivering talents</h2>
          <div className="flex justify-center">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white text-base" size="lg">
              Start Free Trial
            </Button>
          </div>
        </div>
        
        {/* Pricing Section - from Figma */}
        <div className="mt-24">
          <h2 className="text-center text-3xl font-medium mb-12 text-white">Hiring Plans for Teams of All Sizes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
              <h3 className="text-2xl font-medium mb-4 text-white">Basic</h3>
              <div className="text-3xl font-bold mb-6 text-white">$249<span className="text-base font-normal text-white/70">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-green-400 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-sm text-white/80">10 interviews per month</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-green-400 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-sm text-white/80">Basic AI analysis</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-green-400 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-sm text-white/80">Email support</span>
                </li>
              </ul>
              <button className="w-full bg-transparent border border-white/30 text-white py-2 rounded-lg">Get Started</button>
            </div>
            
            <div className="bg-orange-500 rounded-2xl p-8 relative z-10">
              <div className="absolute top-0 right-0 bg-white text-orange-500 text-xs font-medium px-3 py-1 rounded-br-xl rounded-tl-xl">POPULAR</div>
              <h3 className="text-2xl font-medium mb-4 text-white">Pro</h3>
              <div className="text-3xl font-bold mb-6 text-white">$499<span className="text-base font-normal text-white/70">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-sm text-white">30 interviews per month</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-sm text-white">Advanced AI analysis</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-sm text-white">Priority support</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-sm text-white">Full API access</span>
                </li>
              </ul>
              <button className="w-full bg-white text-orange-500 py-2 rounded-lg font-medium">Get Started</button>
            </div>
            
            <div className="bg-black rounded-2xl p-8 border-2 border-white/20">
              <h3 className="text-2xl font-medium mb-4 text-white">Enterprise</h3>
              <div className="text-3xl font-bold mb-6 text-white">Custom</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-green-400 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-sm text-white/80">Unlimited interviews</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-green-400 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-sm text-white/80">Custom AI training</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-green-400 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-sm text-white/80">Dedicated support</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-green-400 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-sm text-white/80">Custom integrations</span>
                </li>
              </ul>
              <button className="w-full bg-transparent border border-white/30 text-white py-2 rounded-lg">Contact Sales</button>
            </div>
          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="container-wide mt-20">
        <h2 className="text-center text-3xl font-medium mb-12 text-white">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="border-b border-white/10 py-6">
              <button className="flex justify-between items-center w-full text-left">
                <h3 className="text-lg font-medium text-white">How does the AI interview process work?</h3>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
