
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

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

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <main>
        {/* Pricing Hero */}
        <section className="pt-32 pb-24 relative overflow-hidden bg-recruit-lightgray dark:bg-gray-900">
          <div className="container-wide">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="mb-6">Simple, Transparent Pricing</h1>
              <p className="text-xl text-recruit-gray mb-6 max-w-2xl mx-auto">
                Choose the plan that's right for your recruitment needs
              </p>
              <div className="inline-flex items-center bg-white rounded-full p-1 border border-gray-200">
                <button className="px-4 py-2 bg-recruit-blue text-white rounded-full text-sm font-medium">
                  Monthly
                </button>
                <button className="px-4 py-2 text-recruit-gray text-sm font-medium">
                  Annually
                </button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Pricing Tables */}
        <section className="section-padding bg-white">
          <div className="container-wide">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier) => (
                <div 
                  key={tier.name}
                  className={`rounded-xl p-8 border ${
                    tier.highlighted 
                      ? 'border-recruit-blue shadow-lg' 
                      : 'border-gray-200'
                  }`}
                >
                  <h3 className="text-xl font-medium mb-2">{tier.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-light">{tier.price}</span>
                    {tier.period && <span className="text-recruit-gray ml-1">{tier.period}</span>}
                  </div>
                  <p className="text-recruit-gray mb-6">{tier.description}</p>
                  
                  <Button 
                    className={`w-full mb-8 ${
                      tier.highlighted 
                        ? 'bg-recruit-accent hover:bg-recruit-blue' 
                        : 'bg-recruit-blue hover:bg-recruit-blue/90'
                    }`}
                  >
                    {tier.cta}
                  </Button>
                  
                  <ul className="space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <Check className="h-5 w-5 text-recruit-blue mr-2 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <p className="text-recruit-gray">
                Need a custom plan? <a href="#" className="text-recruit-blue hover:underline">Contact our sales team</a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
