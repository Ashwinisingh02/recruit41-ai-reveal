
import React from 'react';
import { Check, Smile, Users } from 'lucide-react';

const features = [
  {
    title: "Calibrated Evaluation",
    description: "Our AI evaluations are calibrated across thousands of interviews, eliminating human bias and inconsistency.",
    icon: Check
  },
  {
    title: "Seamless Coordination",
    description: "Multiple agents work in concert to handle the entire hiring pipeline, from screening to final decision support.",
    icon: Users
  },
  {
    title: "Great Candidate Experience",
    description: "Candidates experience responsive, personalized interactions throughout their hiring journey.",
    icon: Smile
  }
];

const Differentiators = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-gray-800 dark:to-gray-900">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Built to Solve Modern Hiring Bottlenecks
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-orange-500 dark:bg-orange-600 text-white">
                <feature.icon size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentiators;
