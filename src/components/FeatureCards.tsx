import React, { useEffect, useRef, useState } from 'react';
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
  return <div className="flex items-center gap-2 mb-2">
      <span className="text-gray-700 dark:text-gray-300 font-medium text-xs">{skill}</span>
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
  let scoreColor = "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100";
  if (typeof score === 'number' || !isNaN(Number(score))) {
    const numScore = Number(score);
    if (numScore < 2.0) {
      scoreColor = "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100";
    } else if (numScore < 3.5) {
      scoreColor = "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100";
    }
  }
  return <div className="flex items-center justify-between mb-3">
      <div className="flex items-center">
        <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 mr-2"></div>
        <span className="text-sm dark:text-gray-200">{name}</span>
      </div>
      <div className={`px-2 py-1 rounded-full text-xs font-medium ${scoreColor}`}>
        {score}
      </div>
    </div>;
};
const FeatureCards = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cards = useRef<HTMLDivElement[]>([]);
  // Add a state to track if the video has loaded
  const [videoLoaded, setVideoLoaded] = useState(false);
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
  return <section ref={sectionRef} className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container-wide">
        <h2 className="text-3xl font-medium mb-12 text-center dark:text-white">Revolutionizing the Interview Process</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* World's Most Advanced Interview Platform */}
          <div ref={addToRefs} className="opacity-0 translate-y-10 transition-all duration-700 hover-lift hover-glow">
            <FeatureCard color="bg-green-500 text-white">
              <div className="flex justify-end mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-16">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </div>
              <h3 className="font-bold mb-2 text-slate-50 text-5xl">World's Most Advanced</h3>
              <p className="text-slate-50 text-2xl">Interview Platform</p>
            </FeatureCard>
          </div>

          {/* Performance Card */}
          <div ref={addToRefs} className="opacity-0 translate-y-10 transition-all duration-700 hover-lift hover-glow">
            <FeatureCard color="bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700" className="p-0 overflow-hidden">
              {/* Candidate Video/Image in a rounded container at the top */}
              <div className="w-full overflow-hidden">
                <AspectRatio ratio={1}>
                  {/* We're using a fallback image if video doesn't load */}
                  {!videoLoaded && <div className="w-full h-full bg-gray-100 dark:bg-gray-700">
                      <img alt="Candidate" src="/lovable-uploads/2a2633aa-807f-4351-a2de-690812bbbf98.png" className="aspect-[4/3] bg-white rounded-lg  object-cover" />
                    </div>}
                  <video className="w-full h-full object-cover" autoPlay loop muted playsInline onLoadedData={() => setVideoLoaded(true)} style={{
                  display: videoLoaded ? 'block' : 'none'
                }}>
                    <source src="https://assets.mixkit.co/videos/preview/mixkit-woman-typing-on-a-laptop-in-a-cafe-479-small.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </AspectRatio>
              </div>

              {/* Performance title and skills below the video */}
              <div className="p-5">
                <h3 className="text-xl font-medium mb-4 text-gray-800 dark:text-gray-200">Performance</h3>
                
                {/* Skills arranged in two columns as shown in the image */}
                <div className="grid grid-cols-2 gap-x-4">
                  <PerformanceIndicator skill="Python" level="green" />
                  <PerformanceIndicator skill="Power BI" level="red" />
                  <PerformanceIndicator skill="SQL" level="orange" />
                  <PerformanceIndicator skill="Tableau" level="orange" />
                  <PerformanceIndicator skill="JAVA" level="green" />
                  <PerformanceIndicator skill="Google Analytics" level="orange" />
                </div>
              </div>
            </FeatureCard>
          </div>

          {/* Self Served */}
          <div ref={addToRefs} className="opacity-0 translate-y-10 transition-all duration-700 hover-lift hover-glow">
            <FeatureCard color="bg-gray-100 dark:bg-gray-800">
              <div className="flex items-center justify-center h-full">
                <h3 className="font-medium text-gray-800 dark:text-gray-200 text-4xl">Self Served</h3>
              </div>
            </FeatureCard>
          </div>

          {/* 10x */}
          <div ref={addToRefs} className="opacity-0 translate-y-10 transition-all duration-700 hover-lift hover-glow">
            <FeatureCard color="bg-orange-100 dark:bg-orange-900/30">
              <h3 className="font-bold text-orange-500 dark:text-orange-400 mb-6 text-8xl">10x</h3>
              <div className="space-y-2">
                <p className="text-orange-700 dark:text-orange-300 text-4xl">Cost effective</p>
                <p className="text-orange-700 dark:text-orange-300 text-3xl">Smarter</p>
                <p className="text-orange-700 dark:text-orange-300 text-2xl">Faster</p>
              </div>
            </FeatureCard>
          </div>

          {/* 80% reduction */}
          <div ref={addToRefs} className="opacity-0 translate-y-10 transition-all duration-700 hover-lift hover-glow">
            <FeatureCard color="bg-green-100 dark:bg-green-900/30">
              <h3 className="font-bold text-green-700 dark:text-green-400 mb-4 text-8xl">80<span className="text-4xl">%</span></h3>
              <p className="text-green-700 dark:text-green-400">reduction in time<br />to hire</p>
            </FeatureCard>
          </div>

          {/* Empty space or additional content */}
          <div ref={addToRefs} className="opacity-0 translate-y-10 transition-all duration-700 hover-lift hover-glow">
            <FeatureCard color="bg-gray-50 dark:bg-gray-800/50">
              <div className="h-full flex items-center justify-center">
                <p className="text-gray-400 dark:text-gray-500 text-center text-2xl">Biased</p>
              </div>
            </FeatureCard>
          </div>

          {/* Candidate Shortlisting */}
          <div ref={addToRefs} className="opacity-0 translate-y-10 transition-all duration-700 hover-lift hover-glow">
            <FeatureCard color="bg-gray-100 dark:bg-gray-800">
              <h3 className="text-xl font-medium mb-6 text-gray-800 dark:text-gray-200">Candidate Shortlisting</h3>
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
            <FeatureCard color="bg-blue-100 dark:bg-blue-900/30">
              <div className="h-full flex flex-col items-center justify-center">
                <h3 className="font-medium text-blue-600 dark:text-blue-400 text-left text-3xl">Detailed Interview Summary</h3>
              </div>
            </FeatureCard>
          </div>
          
          {/* Biased */}
          <div ref={addToRefs} className="opacity-0 translate-y-10 transition-all duration-700 hover-lift hover-glow md:col-span-2">
            <FeatureCard color="bg-orange-400 dark:bg-orange-700 text-white">
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