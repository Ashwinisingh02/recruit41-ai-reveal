
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const agents = [
  {
    title: "Resume Screener",
    description: "Analyzes candidate resumes and profiles to match skills with job requirements.",
    icon: "📄"
  },
  {
    title: "Interview Planner",
    description: "Coordinates schedules and optimizes interview processes for all stakeholders.",
    icon: "📅"
  },
  {
    title: "AI Interviewer",
    description: "Conducts unbiased, consistent technical and behavioral assessments.",
    icon: "🤖"
  },
  {
    title: "Evaluation Agent",
    description: "Synthesizes interview data to provide objective candidate evaluations.",
    icon: "📊"
  },
  {
    title: "Guardrails Agent",
    description: "Ensures compliance with hiring laws and company policies throughout the process.",
    icon: "🛡️"
  },
  {
    title: "Real-World Workflow",
    description: "Simulates actual job tasks to assess practical capabilities and fit.",
    icon: "🔄"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            A System of Intelligent Hiring Agents
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Recruit41 transforms fragmented hiring processes into a unified, intelligent system.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map((agent, index) => (
            <Card key={index} className="border border-gray-200 dark:border-gray-700 hover-lift hover:shadow-md transition-all duration-300">
              <CardHeader>
                <div className="text-5xl mb-4">{agent.icon}</div>
                <CardTitle>{agent.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{agent.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
