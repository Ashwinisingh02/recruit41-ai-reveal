
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const pricingTiers = [
  {
    name: "Starter",
    price: "$99",
    period: "per month",
    description: "Perfect for small teams and startups",
    features: [
      "10 interview templates",
      "Basic AI analysis",
      "Email support",
      "1 admin user",
    ],
    cta: "Start Free Trial",
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$249",
    period: "per month",
    description: "Ideal for growing teams",
    features: [
      "50 interview templates",
      "Advanced AI analysis",
      "Priority support",
      "5 admin users",
      "Custom branding",
      "ATS integration",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations with complex needs",
    features: [
      "Unlimited templates",
      "Full AI capabilities",
      "Dedicated account manager",
      "Unlimited admin users",
      "Advanced integrations",
      "Custom reporting",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

const PricingSection = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annually'>('monthly');

  return (
    <section id="pricing" className="section-padding bg-recruit-lightgray dark:bg-gray-900">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-6 dark:text-white">Simple, Transparent Pricing</h2>
          <p className="text-xl text-recruit-gray mb-8 max-w-2xl mx-auto dark:text-gray-300">
            Choose the plan that's right for your recruitment needs
          </p>
          <div className="inline-flex items-center bg-white dark:bg-gray-800 rounded-full p-1 border border-gray-200 dark:border-gray-700 shadow-sm">
            <button 
              onClick={() => setBillingPeriod('monthly')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                billingPeriod === 'monthly' 
                  ? 'bg-recruit-blue text-white' 
                  : 'text-recruit-gray dark:text-gray-300'
              }`}
            >
              Monthly
            </button>
            <button 
              onClick={() => setBillingPeriod('annually')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                billingPeriod === 'annually' 
                  ? 'bg-recruit-blue text-white' 
                  : 'text-recruit-gray dark:text-gray-300'
              }`}
            >
              Annually <span className="text-xs text-green-500 ml-1">Save 20%</span>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier) => (
            <Card 
              key={tier.name}
              className={`hover-lift border ${
                tier.highlighted 
                  ? 'border-recruit-blue dark:border-blue-500 shadow-lg' 
                  : 'border-gray-200 dark:border-gray-700'
              }`}
            >
              <CardContent className="p-8">
                <h3 className="text-xl font-medium mb-2 dark:text-white">{tier.name}</h3>
                <div className="mb-4 flex items-end">
                  <span className="text-4xl font-light dark:text-white">{tier.price}</span>
                  {tier.period && <span className="text-recruit-gray dark:text-gray-400 ml-1">{tier.period}</span>}
                </div>
                <p className="text-recruit-gray dark:text-gray-400 mb-6">{tier.description}</p>
                
                <Button 
                  className={`w-full mb-8 ${
                    tier.highlighted 
                      ? 'bg-recruit-accent hover:bg-recruit-blue dark:bg-blue-600 dark:hover:bg-blue-700' 
                      : 'bg-recruit-blue hover:bg-recruit-blue/90 dark:bg-blue-700 dark:hover:bg-blue-800'
                  }`}
                >
                  {tier.cta}
                </Button>
                
                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="h-5 w-5 text-recruit-blue dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-recruit-gray dark:text-gray-400">
            Need a custom plan? <a href="#" className="text-recruit-blue dark:text-blue-400 hover:underline">Contact our sales team</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
