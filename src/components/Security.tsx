
import React from 'react';
import { Shield, Link as LinkIcon, Globe } from 'lucide-react';

const securityFeatures = [
  {
    title: "SOC2/ISO 27001 in progress",
    description: "Enterprise-grade security and compliance for your sensitive hiring data.",
    icon: Shield
  },
  {
    title: "ATS Integration",
    description: "Seamlessly connect with your existing Applicant Tracking System.",
    icon: LinkIcon
  },
  {
    title: "Scales Globally",
    description: "Support for multiple languages, time zones, and regional hiring practices.",
    icon: Globe
  }
];

const Security = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Enterprise-Ready from Day One
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {securityFeatures.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-orange-100 dark:bg-gray-700">
                <feature.icon size={32} className="text-orange-500 dark:text-orange-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-300">
            Trusted by businesses of all sizes, from startups to Fortune 500 companies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Security;
