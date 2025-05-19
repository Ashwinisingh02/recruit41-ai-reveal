import React, { useEffect, useRef } from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
interface FeatureCardProps {
  color: string;
  children: React.ReactNode;
  className?: string;
}
const FeatureCard = ({
  color,
  children,
  className = ""
}: FeatureCardProps) => {
  return <div className={`rounded-xl p-6 h-full ${color} ${className} transform transition-all duration-500`}>
      {children}
    </div>;
};
const PerformanceIndicator = ({
  skill,
  level
}: {
  skill: string;
  level: 'green' | 'orange' | 'red';
}) => {
  const colorMap = {
    green: 'bg-green-500',
    orange: 'bg-orange-500',
    red: 'bg-red-500'
  };
  return <div className="flex items-center justify-between mb-2">
      <span className="text-gray-700">{skill}</span>
      <div className={`w-2 h-2 rounded-full ${colorMap[level]}`}></div>
    </div>;
};
const CandidateRow = ({
  name,
  score
}: {
  name: string;
  score: string | number;
}) => {
  // Determine color based on score
  let scoreColor = "bg-green-100 text-green-800";
  if (typeof score === 'number' || !isNaN(Number(score))) {
    const numScore = Number(score);
    if (numScore < 2.0) scoreColor = "bg-red-100 text-red-800";else if (numScore < 3.5) scoreColor = "bg-orange-100 text-orange-800";
  }
  return <div className="flex items-center justify-between mb-3">
      <div className="flex items-center">
        <div className="w-8 h-8 rounded-full bg-gray-200 mr-2"></div>
        <span className="text-sm">{name}</span>
      </div>
      <div className={`px-2 py-1 rounded-full text-xs font-medium ${scoreColor}`}>
        {score}
      </div>
    </div>;
};
const FeatureCards = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cards = useRef<HTMLDivElement[]>([]);
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add animation classes when the section is in view
          cards.current.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('opacity-100', 'translate-y-0');
              card.classList.remove('opacity-0', 'translate-y-10');
            }, index * 150); // Stagger the animations
          });
        }
      });
    };
    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  const addToRefs = (el: HTMLDivElement) => {
    if (el && !cards.current.includes(el)) {
      cards.current.push(el);
    }
  };
  return <section ref={sectionRef} className="py-16 bg-gray-50">
      <div className="container-wide">
        <h2 className="text-3xl font-medium mb-12 text-center">Revolutionizing the Interview Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* World's Most Advanced Interview Platform */}
          <div ref={addToRefs} className="opacity-0 translate-y-10 transition-all duration-700 hover-lift hover-glow">
            <FeatureCard color="bg-green-500 text-white">
              <div className="flex justify-end mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </div>
              <h3 className="font-bold mb-2 text-slate-50 text-4xl">World's Most Advanced</h3>
              <p className="text-xl text-slate-50">Interview Platform</p>
            </FeatureCard>
          </div>

          {/* Performance */}
          <div ref={addToRefs} className="opacity-0 translate-y-10 transition-all duration-700 hover-lift hover-glow">
            <FeatureCard color="bg-white shadow-sm border border-gray-100" className="flex flex-col">
              <h3 className="text-xl font-medium mb-4 text-gray-800">Performance</h3>
              <div className="space-y-3">
                <PerformanceIndicator skill="Python" level="green" />
                <PerformanceIndicator skill="SQL" level="orange" />
                <PerformanceIndicator skill="JAVA" level="green" />
                <PerformanceIndicator skill="Power BI" level="red" />
                <PerformanceIndicator skill="Tableau" level="orange" />
                <PerformanceIndicator skill="Google Analytics" level="orange" />
              </div>
            </FeatureCard>
          </div>

          {/* Self Served */}
          <div ref={addToRefs} className="opacity-0 translate-y-10 transition-all duration-700 hover-lift hover-glow">
            <FeatureCard color="bg-gray-100">
              <div className="flex items-center justify-center h-full bg-slate-50">
                <h3 className="text-2xl font-medium text-gray-800">Self Served</h3>
              </div>
            </FeatureCard>
          </div>

          {/* 10x */}
          <div ref={addToRefs} className="opacity-0 translate-y-10 transition-all duration-700 hover-lift hover-glow">
            <FeatureCard color="bg-orange-100">
              <h3 className="text-6xl font-bold text-orange-500 mb-6">10x</h3>
              <div className="space-y-2">
                <p className="text-orange-700">Cost effective</p>
                <p className="text-orange-700">Smarter</p>
                <p className="text-orange-700">Faster</p>
              </div>
            </FeatureCard>
          </div>

          {/* 80% reduction */}
          <div ref={addToRefs} className="opacity-0 translate-y-10 transition-all duration-700 hover-lift hover-glow">
            <FeatureCard color="bg-green-100">
              <h3 className="font-bold text-green-700 mb-4 text-8xl">80<span className="text-4xl">%</span></h3>
              <p className="text-green-700">reduction in time<br />to hire</p>
            </FeatureCard>
          </div>

          {/* Empty space or additional content */}
          <div ref={addToRefs} className="opacity-0 translate-y-10 transition-all duration-700 hover-lift hover-glow">
            <FeatureCard color="bg-gray-50">
              <div className="h-full flex items-center justify-center">
                <p className="text-gray-400 text-center">Custom Interview Templates</p>
              </div>
            </FeatureCard>
          </div>

          {/* Candidate Shortlisting */}
          <div ref={addToRefs} className="opacity-0 translate-y-10 transition-all duration-700 hover-lift hover-glow">
            <FeatureCard color="bg-gray-100">
              <h3 className="text-xl font-medium mb-6 text-gray-800">Candidate Shortlisting</h3>
              <div className="space-y-1">
                <CandidateRow name="Ashwini Singh" score="4.9" />
                <CandidateRow name="Abhishek Kumar" score="2.4" />
                <CandidateRow name="Tejesh" score="3.1" />
                <CandidateRow name="Anadeep Singh" score="1.6" />
              </div>
            </FeatureCard>
          </div>

          {/* Detailed Interview Summary */}
          <div ref={addToRefs} className="opacity-0 translate-y-10 transition-all duration-700 hover-lift hover-glow">
            <FeatureCard color="bg-blue-100">
              <div className="h-full flex flex-col items-center justify-center">
                <h3 className="text-2xl font-medium text-blue-600 text-center">Detailed Interview Summary</h3>
              </div>
            </FeatureCard>
          </div>
          
          {/* Biased */}
          <div ref={addToRefs} className="opacity-0 translate-y-10 transition-all duration-700 hover-lift hover-glow md:col-span-2">
            <FeatureCard color="bg-orange-400 text-white">
              <div className="h-full flex items-center justify-center">
                <h3 className="text-2xl font-medium inline-flex items-center">
                  <span className="border-t border-white mx-6">Biased</span>
                </h3>
              </div>
            </FeatureCard>
          </div>
        </div>
      </div>
    </section>;
};
export default FeatureCards;