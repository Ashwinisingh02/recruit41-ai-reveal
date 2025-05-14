
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Features = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        {/* First feature - Create & Customize Interview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <div className="inline-block bg-orange-100 text-orange-500 p-2 rounded-full mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-500 text-white font-bold">1</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-medium mb-6">Create & Customize Your Interview</h2>
            <p className="text-lg text-recruit-gray mb-8">
              Design comprehensive interview plans in minutes, not hours. Tailor questions to each role and level.
            </p>
            <a href="#" className="inline-flex items-center text-orange-500 font-medium">
              Learn more <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
          <div className="bg-orange-50 p-8 rounded-2xl border border-orange-100">
            <div className="aspect-[4/3] bg-white rounded-lg shadow-sm flex items-center justify-center">
              <p className="text-gray-400">Interview Builder Interface</p>
            </div>
          </div>
        </div>
        
        {/* Stats section - from Figma */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          <div className="text-center">
            <div className="inline-block bg-orange-100 rounded-full p-2 mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-500 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                </svg>
              </span>
            </div>
            <p className="text-4xl font-bold text-orange-500 mb-2">26+</p>
            <p className="text-sm text-recruit-gray">Candidates</p>
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
            <p className="text-sm text-recruit-gray">Companies</p>
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
        <div className="mb-24 bg-black rounded-3xl overflow-hidden p-8">
          <h3 className="text-2xl font-medium mb-8 text-white">AI Interview Platform - Real-time insights</h3>
          <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center text-white">
            <p>AI Interview Platform Demo</p>
          </div>
        </div>
        
        {/* 10x Feature Cards - from Figma */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-green-500 p-6 rounded-2xl text-white">
            <div className="flex justify-between items-start mb-6">
              <h4 className="text-xl font-medium">Unbiased<br />Smart analysis</h4>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white/70">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </div>
            <p className="text-sm text-white/80">Get fair, consistent evaluations every time</p>
          </div>
          
          <div className="bg-gray-100 p-6 rounded-2xl relative">
            <img src="/placeholder.svg" alt="Candidate profile" className="absolute right-6 top-6 w-16 h-16 rounded-lg" />
            <div className="mt-24">
              <h4 className="text-xl font-medium mb-3">Shortlisted</h4>
              <div className="space-y-2">
                {[1, 2, 3, 4].map(item => (
                  <div key={item} className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-green-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <span className="text-sm text-gray-600">Skill {item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-orange-50 p-6 rounded-2xl text-orange-600">
            <div className="text-3xl font-bold mb-4">10x</div>
            <h4 className="text-xl font-medium mb-3">Constructive Feedback</h4>
            <p className="text-sm text-gray-600 mb-6">Our AI provides detailed, actionable feedback</p>
            <button className="bg-orange-500 text-white py-2 px-4 rounded-lg text-sm">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
