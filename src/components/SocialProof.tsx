
import React, { useState, useEffect } from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

// University logos data with more representative institutions
const universityLogos = [
  { id: 1, name: 'IIT', shortName: 'IIT' },
  { id: 2, name: 'Amity', shortName: 'A' },
  { id: 3, name: 'Manipal', shortName: 'M' },
  { id: 4, name: 'KIIT', shortName: 'K' },
  { id: 5, name: 'VIT', shortName: 'V' },
  { id: 6, name: 'BITS', shortName: 'B' },
  { id: 7, name: 'PES', shortName: 'P' },
  { id: 8, name: 'SRM', shortName: 'S' },
];

// Enhanced testimonial data with more variety
const testimonials = [
  {
    id: 1,
    quote: "Recruit41 helped me to get placed. The process was so easy and smooth compared to offline interviews. Thanks to Kiran for judging my skills.",
    name: "Ashwini Singh",
    title: "UX/UI Designer",
    imgSrc: "/placeholder.svg"
  },
  {
    id: 2,
    quote: "The platform's ability to objectively assess my technical skills gave me confidence. I got three job offers within two weeks of using Recruit41!",
    name: "Michael Chen",
    title: "Software Engineer",
    imgSrc: "/placeholder.svg"
  },
  {
    id: 3,
    quote: "With Recruit41, I finally found a way to showcase my coding abilities without the stress of traditional whiteboard interviews. The process was seamless.",
    name: "Priya Patel",
    title: "Full Stack Developer",
    imgSrc: "/placeholder.svg"
  },
  {
    id: 4,
    quote: "As someone who gets nervous in traditional interviews, Recruit41's platform allowed me to demonstrate my skills in a comfortable environment. Now I'm at my dream job!",
    name: "David Wilson",
    title: "Backend Engineer",
    imgSrc: "/placeholder.svg"
  },
  {
    id: 5,
    quote: "Recruit41's AI assessment was spot on with my abilities. The detailed feedback helped me improve, and I secured a role at a top tech company within a month.",
    name: "Sophia Rodriguez",
    title: "Frontend Developer",
    imgSrc: "/placeholder.svg"
  }
];

const SocialProof = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Animation for the floating logos
  useEffect(() => {
    const logos = document.querySelectorAll('.floating-logo');
    logos.forEach((logo, index) => {
      const element = logo as HTMLElement;
      element.style.animationDelay = `${index * 0.2}s`;
    });
  }, []);

  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container-wide max-w-7xl mx-auto">
        {/* Hero Section with Heading and Tagline */}
        <div className="text-center mb-16 relative z-10">
          <p className="text-gray-600 font-medium mb-2 animate-fade-in">With no limits,</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 animate-fade-in">
            Find top 1%, with ease.
          </h2>
        </div>

        {/* Main Content Area with Logos and Testimonials */}
        <div className="relative">
          {/* Floating University Logos */}
          <div className="absolute inset-0 -z-0 overflow-visible" aria-hidden="true">
            {universityLogos.map((logo, index) => {
              // Calculate positions for the logos in a circular pattern
              const angle = (index / universityLogos.length) * Math.PI * 2;
              const radius = 200; // Adjust as needed for spacing
              const top = 50 + Math.sin(angle) * radius;
              const left = 50 + Math.cos(angle) * radius;
              
              return (
                <div
                  key={logo.id}
                  className="floating-logo absolute w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center transform hover:scale-110 transition-transform"
                  style={{
                    top: `${top}%`,
                    left: `${left}%`,
                    transform: 'translate(-50%, -50%)',
                    animation: 'float 6s ease-in-out infinite',
                  }}
                >
                  <span className="text-base font-bold text-gray-800">{logo.shortName}</span>
                </div>
              );
            })}
          </div>

          {/* Testimonial Carousel */}
          <div className="relative z-10 max-w-3xl mx-auto">
            <Carousel
              opts={{
                align: "center",
                loop: true,
              }}
              className="w-full max-w-xl mx-auto"
              onSelect={(index) => setActiveTestimonial(index)}
            >
              <CarouselContent>
                {testimonials.map((testimonial) => (
                  <CarouselItem key={testimonial.id} className="md:basis-full">
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 mx-auto">
                      <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
                        "{testimonial.quote}"
                      </p>
                      <div className="flex items-center">
                        <Avatar className="h-12 w-12 border-2 border-orange-100">
                          <AvatarImage src={testimonial.imgSrc} alt={testimonial.name} />
                          <AvatarFallback className="bg-orange-100 text-orange-800">
                            {testimonial.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="ml-4">
                          <h4 className="font-medium text-gray-900">{testimonial.name}</h4>
                          <p className="text-sm text-gray-500">{testimonial.title}</p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              <div className="flex justify-center mt-8">
                <CarouselPrevious className="relative inset-auto mr-2" />
                <div className="flex gap-1 items-center">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all ${
                        activeTestimonial === index ? 'bg-gray-800 w-4' : 'bg-gray-300'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
                <CarouselNext className="relative inset-auto ml-2" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
      
      {/* CSS for floating animation */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translate(-50%, -50%) translateY(0px);
          }
          50% {
            transform: translate(-50%, -50%) translateY(-15px);
          }
          100% {
            transform: translate(-50%, -50%) translateY(0px);
          }
        }
        .floating-logo {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default SocialProof;
