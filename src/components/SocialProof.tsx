
import React from 'react';

const companyLogos = Array(8).fill(0).map((_, i) => ({
  id: i + 1,
  name: `Company ${i + 1}`,
}));

const SocialProof = () => {
  return (
    <section className="section-padding bg-recruit-lightgray">
      <div className="container-wide">
        {/* Industry Logos */}
        <div className="mb-20">
          <h2 className="text-center text-3xl font-medium mb-12">Industries We've Worked With</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {companyLogos.map((company) => (
              <div key={company.id} className="flex items-center justify-center">
                <div className="h-16 w-16 bg-white rounded-full shadow-sm flex items-center justify-center">
                  <span className="text-sm text-gray-500">{company.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial - from Figma */}
        <div className="bg-white rounded-2xl p-8 mb-20">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-medium text-center">Find top 1%, with ease.</h3>
            </div>
            <div className="md:w-2/3">
              <p className="text-gray-600 italic mb-4">
                "Recruit41 has completely transformed our hiring process. We've reduced time-to-hire by 70% while improving our candidate quality dramatically. The AI-powered analytics give us insights we never had access to before."
              </p>
              <div className="flex items-center">
                <strong className="mr-2">Sarah Johnson</strong>
                <span className="text-sm text-gray-500">Head of Talent, TechCorp</span>
              </div>
            </div>
          </div>
        </div>

        {/* "Find it with ease" Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-medium mb-4">Find top 1%, with ease.</h2>
          <p className="text-xl text-recruit-gray max-w-2xl mx-auto">
            Our platform helps you identify and hire the best talent efficiently and accurately.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
