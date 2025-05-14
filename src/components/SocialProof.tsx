
import React from 'react';

const companyLogos = [
  {
    id: 1,
    name: "Company One",
  },
  {
    id: 2,
    name: "Company Two",
  },
  {
    id: 3,
    name: "Company Three",
  },
  {
    id: 4,
    name: "Company Four",
  },
  {
    id: 5,
    name: "Company Five",
  },
];

const testimonials = [
  {
    id: 1,
    quote: "Recruit41 has completely transformed our hiring process. We've reduced time-to-hire by 70% while improving our candidate quality dramatically.",
    name: "Sarah Johnson",
    title: "Head of Talent Acquisition",
    company: "Tech Innovations Inc."
  },
  {
    id: 2,
    quote: "The AI-powered analysis gives us insights we never had access to before. It's like having an expert interviewer on the team who never misses a detail.",
    name: "Michael Chen",
    title: "Recruitment Director",
    company: "Global Finance Group"
  },
];

const SocialProof = () => {
  return (
    <section className="section-padding bg-recruit-lightgray">
      <div className="container-wide">
        {/* Company Logos */}
        <div className="mb-20">
          <p className="text-center text-sm uppercase tracking-wider text-recruit-gray mb-10">Trusted by industry leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8">
            {companyLogos.map((company) => (
              <div key={company.id} className="flex items-center justify-center">
                <div className="h-8 w-32 bg-gray-200 rounded flex items-center justify-center">
                  <span className="text-sm text-gray-500">{company.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white rounded-lg p-8 text-center shadow-sm">
            <p className="text-4xl font-light text-recruit-blue mb-2">93%</p>
            <p className="text-recruit-gray">Reduction in time-to-hire</p>
          </div>
          <div className="bg-white rounded-lg p-8 text-center shadow-sm">
            <p className="text-4xl font-light text-recruit-blue mb-2">87%</p>
            <p className="text-recruit-gray">Improvement in candidate quality</p>
          </div>
          <div className="bg-white rounded-lg p-8 text-center shadow-sm">
            <p className="text-4xl font-light text-recruit-blue mb-2">62%</p>
            <p className="text-recruit-gray">Decrease in hiring costs</p>
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h2 className="text-center mb-16">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-lg p-8 shadow-sm relative">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-8 h-8 text-recruit-blue/10 absolute top-6 left-6" viewBox="0 0 975.036 975.036">
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <div className="pl-8">
                  <p className="text-recruit-gray italic mb-6">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                      <span className="text-gray-500 text-xs">Photo</span>
                    </div>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-recruit-gray">{testimonial.title}, {testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
