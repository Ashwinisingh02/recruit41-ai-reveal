
import React from 'react';

const companyLogos = [
  { id: 1, name: 'Google', industry: 'Technology' },
  { id: 2, name: 'Meta', industry: 'Social Media' },
  { id: 3, name: 'Amazon', industry: 'E-commerce' },
  { id: 4, name: 'Microsoft', industry: 'Software' },
  { id: 5, name: 'Salesforce', industry: 'CRM' },
  { id: 6, name: 'Adobe', industry: 'Creative Software' },
  { id: 7, name: 'IBM', industry: 'Enterprise Tech' },
  { id: 8, name: 'Oracle', industry: 'Database' },
];

const testimonials = [
  {
    id: 1,
    quote: "Recruit41 has completely transformed our hiring process. We've reduced time-to-hire by 70% while improving our candidate quality dramatically. The AI-powered analytics give us insights we never had access to before.",
    name: "Sarah Johnson",
    title: "Head of Engineering Talent, TechCorp",
    imgSrc: "/placeholder.svg"
  },
  {
    id: 2,
    quote: "The platform's ability to objectively assess technical skills has removed bias from our process. We're building more diverse engineering teams and seeing increased innovation as a result.",
    name: "Michael Chen",
    title: "CTO, StartupX",
    imgSrc: "/placeholder.svg"
  },
  {
    id: 3,
    quote: "With Recruit41, we finally have a scalable way to evaluate candidates that doesn't drain our engineering team's time. The quality of hires has improved significantly.",
    name: "Priya Patel",
    title: "VP of Talent Acquisition, Enterprise Solutions",
    imgSrc: "/placeholder.svg"
  }
];

const SocialProof = () => {
  return (
    <section className="section-padding bg-recruit-lightgray">
      <div className="container-wide">
        {/* Industry Logos */}
        <div className="mb-20 animate-fade-in">
          <h2 className="text-center text-3xl font-medium mb-12">Trusted by Industry Leaders</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-8">
            {companyLogos.map((company) => (
              <div key={company.id} className="flex items-center justify-center group">
                <div className="h-16 w-full bg-white rounded-xl shadow-sm flex items-center justify-center p-3 hover:shadow-md transition-shadow">
                  <span className="text-sm font-medium text-gray-700 group-hover:text-orange-500 transition-colors">{company.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Testimonial */}
        <div className="bg-white rounded-2xl p-8 shadow-sm mb-20 animate-fade-in">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3">
              <div className="w-24 h-24 bg-orange-100 rounded-full mx-auto mb-4 overflow-hidden">
                <img src={testimonials[0].imgSrc} alt={testimonials[0].name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-medium text-center">Find top 1%, with ease.</h3>
            </div>
            <div className="md:w-2/3">
              <p className="text-gray-600 italic mb-4 text-lg leading-relaxed">
                "{testimonials[0].quote}"
              </p>
              <div className="flex items-center">
                <strong className="mr-2">{testimonials[0].name}</strong>
                <span className="text-sm text-gray-500">{testimonials[0].title}</span>
              </div>
            </div>
          </div>
        </div>

        {/* More Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 animate-fade-in">
          {testimonials.slice(1).map(testimonial => (
            <div key={testimonial.id} className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex gap-4 items-start mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full shrink-0 overflow-hidden">
                  <img src={testimonial.imgSrc} alt={testimonial.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-medium text-recruit-dark">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>

        {/* "Find it with ease" Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl font-medium mb-4">Find top 1%, with ease.</h2>
          <p className="text-xl text-recruit-gray max-w-2xl mx-auto">
            Our advanced AI can identify the best technical talent by evaluating not just coding skills, but problem-solving approach and communication abilities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
