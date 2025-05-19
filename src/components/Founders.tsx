
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users } from 'lucide-react';

const founders = [
  {
    name: "Sripathi Krishnan",
    role: "Co-Founder & CEO",
    bio: "Former engineering leader with expertise in AI systems."
  },
  {
    name: "Swetha Suresh",
    role: "Co-Founder & COO",
    bio: "Operations expert with background in scaling HR tech."
  },
  {
    name: "Samkeet Jain",
    role: "Co-Founder & CTO",
    bio: "AI researcher focused on natural language processing."
  }
];

const backers = [
  {
    name: "Harshit Singhal",
    role: "Investor & Advisor"
  },
  {
    name: "Anshuman Singh",
    role: "Investor & Advisor"
  },
  {
    name: "Himanshu Varshney",
    role: "Investor & Advisor"
  }
];

const Founders = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Built in India, Ready for the World
          </h2>
        </div>

        <div className="mb-16">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-gray-800 dark:text-gray-200">
            <Users size={24} className="text-orange-500" />
            <span>Our Founders</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {founders.map((founder, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-orange-100 dark:bg-gray-700 flex items-center justify-center mb-4 mx-auto">
                    <span className="text-xl font-bold text-orange-500 dark:text-orange-400">{founder.name.charAt(0)}</span>
                  </div>
                  <h4 className="font-bold text-center text-gray-900 dark:text-white mb-1">{founder.name}</h4>
                  <p className="text-orange-500 dark:text-orange-400 text-center text-sm mb-2">{founder.role}</p>
                  <p className="text-gray-600 dark:text-gray-300 text-center text-sm">{founder.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-6 text-center text-gray-800 dark:text-gray-200">Backed By</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {backers.map((backer, index) => (
              <div key={index} className="text-center">
                <p className="font-semibold text-gray-900 dark:text-white">{backer.name}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{backer.role}</p>
                <p className="text-xs text-orange-500 dark:text-orange-400">HashedIn → Deloitte</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founders;
