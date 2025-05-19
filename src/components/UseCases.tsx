
import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { BriefcaseIcon, Code, GraduationCap, Users } from 'lucide-react';

const useCases = [
  {
    id: "campus",
    title: "Campus Hiring",
    icon: GraduationCap,
    description: "Scale your campus recruiting efforts with automated screening and interviewing for large candidate pools.",
    benefits: [
      "Screen thousands of candidates quickly",
      "Standardize evaluation across campuses",
      "Identify top talent efficiently"
    ]
  },
  {
    id: "lateral",
    title: "Lateral Hiring",
    icon: BriefcaseIcon,
    description: "Streamline experienced professional hiring with intelligent role-specific evaluation.",
    benefits: [
      "Deep skill assessment customized by role",
      "Evaluate cultural and team fit",
      "Reduce time-to-hire by 40%"
    ]
  },
  {
    id: "tech",
    title: "Tech & Non-Tech Roles",
    icon: Code,
    description: "From engineering to marketing, our platform adapts to evaluate role-specific competencies.",
    benefits: [
      "Technical coding evaluations",
      "Soft skills assessment",
      "Domain knowledge validation"
    ]
  },
  {
    id: "volume",
    title: "Lean Teams or High Volume",
    icon: Users,
    description: "Whether you're a startup or enterprise, scale your hiring process to match your needs.",
    benefits: [
      "No additional hiring staff needed",
      "Consistent quality at any scale",
      "Flexible implementation options"
    ]
  }
];

const UseCases = () => {
  const [activeTab, setActiveTab] = useState("campus");
  
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            One Platform. Many Hiring Journeys.
          </h2>
        </div>

        <Tabs defaultValue="campus" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-transparent mb-8">
            {useCases.map(useCase => (
              <TabsTrigger 
                key={useCase.id} 
                value={useCase.id} 
                className={`flex flex-col items-center p-4 gap-2 data-[state=active]:bg-orange-500 data-[state=active]:text-white dark:data-[state=active]:bg-orange-600`}
              >
                <useCase.icon size={24} />
                <span>{useCase.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          
          {useCases.map(useCase => (
            <TabsContent key={useCase.id} value={useCase.id} className="border rounded-lg p-6 mt-2">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{useCase.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{useCase.description}</p>
                  <ul className="space-y-2">
                    {useCase.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="text-orange-500 dark:text-orange-400">✓</span>
                        <span className="text-gray-700 dark:text-gray-200">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="md:w-1/2 bg-gray-100 dark:bg-gray-800 rounded-xl h-64 flex items-center justify-center">
                  <useCase.icon size={80} className="text-orange-300 dark:text-orange-600 opacity-50" />
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default UseCases;
