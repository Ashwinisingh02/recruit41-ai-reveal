
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { MessageSquare } from 'lucide-react';

const testimonials = [
  {
    quote: "The agentic approach to hiring has transformed how we build our engineering team. We're finding better candidates in less time.",
    author: "Sarah Chen",
    position: "CTO, TechStartup Inc.",
    company: "TechStartup Inc."
  },
  {
    quote: "Our campus hiring efficiency improved by 75%. Recruit41 helped us process over 2,000 candidates while maintaining high quality standards.",
    author: "Raj Patel",
    position: "Head of Talent Acquisition",
    company: "Enterprise Solutions"
  },
  {
    quote: "What impressed me most was the quality of candidate experience. Our applicant satisfaction scores are at an all-time high.",
    author: "Maria Rodriguez",
    position: "VP of People Operations",
    company: "Growth Ventures"
  },
  {
    quote: "Recruit41's platform eliminated hiring bias in our process while finding candidates with the perfect skill match for our needs.",
    author: "Alex Johnson",
    position: "Hiring Manager",
    company: "DataTech Solutions"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-orange-50 dark:bg-gray-800">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            What Our Users Say
          </h2>
        </div>

        <Carousel 
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                <div className="p-2">
                  <Card className="border-0 shadow-lg dark:bg-gray-900">
                    <CardContent className="p-6">
                      <MessageSquare className="h-8 w-8 text-orange-500 dark:text-orange-400 mb-4" />
                      <p className="text-gray-700 dark:text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">{testimonial.author}</p>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">{testimonial.position}, {testimonial.company}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8 gap-2">
            <CarouselPrevious className="static transform-none bg-white dark:bg-gray-700" />
            <CarouselNext className="static transform-none bg-white dark:bg-gray-700" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
