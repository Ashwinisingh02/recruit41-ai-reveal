import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  return <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-500/10 to-purple-600/10 rounded-full blur-3xl animate-pulse" style={{
        animationDelay: '1s'
      }}></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      <div className="container-wide relative z-10 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={`text-white transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center px-4 py-2 bg-orange-500/20 rounded-full border border-orange-500/30 mb-6">
              <span className="text-orange-300 text-sm font-medium">🚀 AI-Powered Hiring Platform</span>
            </div>
            
            <h1 className="mb-8">
              <span className="block text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                The Future of
              </span>
              <span className="block text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Intelligent Hiring
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 font-light mb-10 max-w-lg leading-relaxed">
              Transform your recruitment with AI agents that screen, interview, and evaluate candidates at scale—delivering better hires, faster.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white border-0 text-lg px-8 py-6 rounded-xl hover-lift shadow-lg hover:shadow-orange-500/25">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-gray-600 bg-transparent hover:bg-white/5 text-white text-lg px-8 py-6 rounded-xl hover-lift">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center space-x-8 text-sm text-gray-400">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                <span>Setup in 5 minutes</span>
              </div>
            </div>
          </div>

          <div className={`lg:relative lg:h-full flex items-center justify-center transform transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative w-full max-w-lg mx-auto">
              {/* Floating Elements */}
              
              <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center shadow-2xl animate-bounce" style={{
              animationDelay: '0.5s'
            }}>
                <span className="text-white font-bold text-xs">ML</span>
              </div>
              <div className="absolute -bottom-4 -left-2 w-14 h-14 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center shadow-2xl animate-bounce" style={{
              animationDelay: '1s'
            }}>
                <span className="text-white font-bold text-xs">NLP</span>
              </div>

              <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-white/20">
                <div className="flex justify-center items-center gap-4 mb-8">
                  {['Resume AI', 'Interview AI', 'Evaluation AI'].map((tech, index) => <div key={index} className="px-3 py-2 bg-white/20 rounded-lg">
                      <span className="text-xs text-white font-medium">{tech}</span>
                    </div>)}
                </div>
                
                <div className="rounded-2xl overflow-hidden border border-white/10 mb-8">
                  <AspectRatio ratio={16 / 9} className="bg-gradient-to-br from-gray-800 to-gray-900">
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center mb-4 shadow-lg">
                        <Play className="w-8 h-8 text-white" />
                      </div>
                      <p className="text-gray-300 font-medium">Interactive Demo</p>
                      <p className="text-gray-500 text-sm">See AI in action</p>
                    </div>
                  </AspectRatio>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-3 bg-white/10 rounded-xl">
                    <p className="text-2xl font-bold text-orange-400">2M+</p>
                    <p className="text-xs text-gray-300">Interviews</p>
                  </div>
                  <div className="text-center p-3 bg-white/10 rounded-xl">
                    <p className="text-2xl font-bold text-blue-400">87%</p>
                    <p className="text-xs text-gray-300">Accuracy</p>
                  </div>
                  <div className="text-center p-3 bg-white/10 rounded-xl">
                    <p className="text-2xl font-bold text-green-400">65%</p>
                    <p className="text-xs text-gray-300">Time Saved</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>;
};
export default Hero;