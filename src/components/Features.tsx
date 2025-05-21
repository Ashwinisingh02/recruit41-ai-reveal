import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
const Features = () => {
  // Create refs for each section to observe
  const step1Ref = useRef<HTMLDivElement>(null);
  const step2Ref = useRef<HTMLDivElement>(null);
  const step3Ref = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    };
    const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
          // Once animation is complete, unobserve to improve performance
          observer.unobserve(entry.target);
        }
      });
    };
    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    // Observe all section refs
    const elements = [step1Ref.current, step2Ref.current, step3Ref.current, statsRef.current, videoRef.current, cardsRef.current];
    elements.forEach(el => {
      if (el) observer.observe(el);
    });
    return () => {
      elements.forEach(el => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);
  return <section className="section-padding bg-slate-950">
      <div className="container-wide">
        {/* First feature - Create & Customize Interview */}
        <div ref={step1Ref} className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24 opacity-0 translate-y-10 transition-all duration-700">
          <div>
            <div className="inline-block bg-orange-100 text-orange-500 p-2 rounded-full mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-500 text-white font-bold">1</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-medium mb-6">Create & Customize Your Interview</h2>
            <p className="text-lg text-recruit-gray mb-8 leading-relaxed">
              Design comprehensive technical interview plans in minutes, not hours. Our platform offers pre-built templates for various roles and levels, with fully customizable questions and scoring criteria.
            </p>
            <a href="#" className="inline-flex items-center text-orange-500 font-medium hover:underline">
              Learn more <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
          <div className="bg-orange-50 p-8 rounded-2xl border border-orange-100 shadow-sm">
            <div className="aspect-[4/3] bg-white rounded-lg shadow-sm p-6">
              <div className="mb-6">
                <h3 className="text-xl font-medium mb-2">Frontend Developer Interview</h3>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="flex items-center mr-4"><span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span> Active</span>
                  <span>Duration: 60 min</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="p-3 bg-gray-50 rounded-md border border-gray-100">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-sm">JavaScript Fundamentals</span>
                    <span className="text-xs text-gray-500">15 min</span>
                  </div>
                </div>
                <div className="p-3 bg-gray-50 rounded-md border border-gray-100">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-sm">React Components</span>
                    <span className="text-xs text-gray-500">20 min</span>
                  </div>
                </div>
                <div className="p-3 bg-gray-50 rounded-md border border-gray-100">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-sm">API Integration</span>
                    <span className="text-xs text-gray-500">15 min</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Step 2 - Invite Candidates & Schedule */}
        <div ref={step2Ref} className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24 opacity-0 translate-y-10 transition-all duration-700 delay-75">
          <div className="order-2 md:order-1 bg-green-50 p-8 rounded-2xl border border-green-100 shadow-sm">
            <div className="aspect-[4/3] bg-white rounded-lg shadow-sm p-6">
              <div className="mb-6">
                <h3 className="text-xl font-medium mb-2">Candidate Scheduling</h3>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="flex items-center mr-4"><span className="w-2 h-2 bg-blue-500 rounded-full mr-1"></span> Available</span>
                  <span>4 Slots Today</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-3 bg-gray-50 rounded-md border border-gray-100">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-sm text-slate-950">10:00 AM - 11:00 AM</span>
                    <span className="text-xs text-blue-500">Available</span>
                  </div>
                </div>
                <div className="p-3 bg-gray-50 rounded-md border border-gray-100">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-sm text-gray-950">1:30 PM - 2:30 PM</span>
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
            <h2 className="text-3xl md:text-4xl font-medium mb-6">Invite Candidates & Schedule</h2>
            <p className="text-lg text-recruit-gray mb-8 leading-relaxed">
              Seamlessly invite candidates to your custom technical assessments. Our scheduling system integrates with your calendar and sends automated reminders to ensure candidates are prepared and on time.
            </p>
            <a href="#" className="inline-flex items-center text-orange-500 font-medium hover:underline">
              Learn more <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
        
        {/* Step 3 - Review AI-Powered Insights */}
        <div ref={step3Ref} className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24 opacity-0 translate-y-10 transition-all duration-700 delay-150">
          <div>
            <div className="inline-block bg-orange-100 text-orange-500 p-2 rounded-full mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-500 text-white font-bold">3</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-medium mb-6">Review AI-Powered Insights</h2>
            <p className="text-lg text-recruit-gray mb-8 leading-relaxed">
              Our AI analyzes candidate performance across multiple dimensions, providing objective scoring and detailed insights. Compare candidates side-by-side and make data-driven hiring decisions with confidence.
            </p>
            <a href="#" className="inline-flex items-center text-orange-500 font-medium hover:underline">
              Learn more <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
          <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 shadow-sm">
            <div className="rounded-lg overflow-hidden">
              <AspectRatio ratio={16 / 9} className="bg-white">
                <img src="/lovable-uploads/cb9cc1ae-4408-4cad-95c1-0b59eb6979cd.png" alt="Candidate Report Insights" className="w-full h-full object-contain" style={{
                maxHeight: '400px'
              }} onError={e => {
                console.error('Image failed to load');
                e.currentTarget.style.display = 'none';
              }} />
              </AspectRatio>
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24 opacity-0 translate-y-10 transition-all duration-700 delay-300">
          <div className="text-center">
            <div className="inline-block bg-orange-100 rounded-full p-2 mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-500 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                </svg>
              </span>
            </div>
            <p className="text-4xl font-bold text-orange-500 mb-2">2600+</p>
            <p className="text-sm text-recruit-gray">Candidates Evaluated</p>
          </div>
          
          <div className="text-center">
            <div className="inline-block bg-orange-100 rounded-full p-2 mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-500 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </span>
            </div>
            <p className="text-4xl font-bold text-orange-500 mb-2">2.4k</p>
            <p className="text-sm text-recruit-gray">Hours Saved</p>
          </div>
          
          <div className="text-center">
            <div className="inline-block bg-orange-100 rounded-full p-2 mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-500 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                </svg>
              </span>
            </div>
            <p className="text-4xl font-bold text-orange-500 mb-2">75+</p>
            <p className="text-sm text-recruit-gray">Partner Companies</p>
          </div>
          
          <div className="text-center">
            <div className="inline-block bg-orange-100 rounded-full p-2 mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-500 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                </svg>
              </span>
            </div>
            <p className="text-4xl font-bold text-orange-500 mb-2">13</p>
            <p className="text-sm text-recruit-gray">Countries</p>
          </div>
        </div>
        
        {/* AI Interview Platform */}
        <div ref={videoRef} className="mb-24 bg-black rounded-3xl overflow-hidden p-8 opacity-0 translate-y-10 transition-all duration-700 delay-300">
          <h3 className="text-2xl font-medium mb-6 text-white">AI Interview Platform - Real-time insights</h3>
          <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-orange-500/80 flex items-center justify-center hover:bg-orange-600/80 transition-colors cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white ml-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                </svg>
              </div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <h4 className="text-white text-lg font-medium mb-2">Watch how it works</h4>
              <p className="text-white/80 text-sm">See how our AI evaluates technical skills in real-time</p>
            </div>
          </div>
        </div>
        
        {/* 10x Feature Cards */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 opacity-0 translate-y-10 transition-all duration-700 delay-300">
          <Card className="hover-lift hover-glow">
            <CardContent className="p-6">
              <div className="bg-orange-100 text-orange-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Customizable Templates</h3>
              <p className="text-recruit-gray mb-4">Create interview templates for any role with custom scoring criteria tailored to your needs.</p>
              <a href="#" className="text-orange-500 font-medium hover:underline flex items-center">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </CardContent>
          </Card>
          
          <Card className="hover-lift hover-glow">
            <CardContent className="p-6">
              <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Detailed Reports</h3>
              <p className="text-recruit-gray mb-4">Get comprehensive insights with AI-powered performance analytics after each interview.</p>
              <a href="#" className="text-blue-500 font-medium hover:underline flex items-center">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </CardContent>
          </Card>
          
          <Card className="hover-lift hover-glow">
            <CardContent className="p-6">
              <div className="bg-green-100 text-green-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Time Savings</h3>
              <p className="text-recruit-gray mb-4">Reduce interview prep and evaluation time by up to 75% with intelligent automation.</p>
              <a href="#" className="text-green-500 font-medium hover:underline flex items-center">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </CardContent>
          </Card>
          
          <Card className="hover-lift hover-glow">
            <CardContent className="p-6">
              <div className="bg-purple-100 text-purple-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Bias Reduction</h3>
              <p className="text-recruit-gray mb-4">Our algorithms are designed to minimize unconscious bias in the hiring process.</p>
              <a href="#" className="text-purple-500 font-medium hover:underline flex items-center">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </CardContent>
          </Card>
          
          <Card className="hover-lift hover-glow">
            <CardContent className="p-6">
              <div className="bg-red-100 text-red-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Team Collaboration</h3>
              <p className="text-recruit-gray mb-4">Share interview insights with your team and make collaborative hiring decisions.</p>
              <a href="#" className="text-red-500 font-medium hover:underline flex items-center">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </CardContent>
          </Card>
          
          <Card className="hover-lift hover-glow">
            <CardContent className="p-6">
              <div className="bg-yellow-100 text-yellow-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Enterprise Security</h3>
              <p className="text-recruit-gray mb-4">SOC2 and ISO 27001 compliant with end-to-end encryption for all your data.</p>
              <a href="#" className="text-yellow-600 font-medium hover:underline flex items-center">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default Features;