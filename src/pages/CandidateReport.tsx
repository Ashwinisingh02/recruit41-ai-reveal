
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { ArrowRight, Camera, Info, Mic, ScreenOff } from 'lucide-react';

const CandidateReport = () => {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <main className="pt-24 pb-16">
        <div className="container-wide">
          {/* Header with position and status */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-medium">Frontend Developer Position</h1>
            <Badge className="bg-blue-50 text-blue-600 hover:bg-blue-100 border-none">In Review</Badge>
          </div>
          
          {/* Candidate Profile Card */}
          <Card className="mb-8 border-gray-200">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row justify-between">
                <div className="flex-grow">
                  {/* Candidate Name and Actions */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                    <h2 className="text-2xl font-bold text-recruit-dark">Alex Johnson</h2>
                    <div className="flex gap-2">
                      <Badge variant="outline" className="bg-white border-gray-200 text-gray-700 hover:bg-gray-50 flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        View Resume
                      </Badge>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600 mb-6">
                    <div className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span>alex.johnson@example.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>(555) 123-4567</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>San Francisco, CA</span>
                    </div>
                  </div>

                  {/* Resume Summary */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                        <h3 className="text-sm font-semibold text-gray-600 uppercase">Resume Summary</h3>
                      </div>
                      <button className="text-blue-600 text-sm hover:underline flex items-center gap-1">
                        Show in detail <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                    <p className="text-sm text-gray-700">
                      Senior Frontend Developer with 5+ years of experience in React, TypeScript, and Next.js. Specialized in building responsive, accessible web applications with modern UI frameworks. Previously led frontend development at TechCorp, delivering a 40% improvement in application performance.
                    </p>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-green-100 text-green-700 hover:bg-green-200 border-none">React</Badge>
                    <Badge className="bg-green-100 text-green-700 hover:bg-green-200 border-none">TypeScript</Badge>
                    <Badge className="bg-green-100 text-green-700 hover:bg-green-200 border-none">Next.js</Badge>
                    <Badge className="bg-red-100 text-red-700 hover:bg-red-200 border-none">GraphQL</Badge>
                    <Badge className="bg-red-100 text-red-700 hover:bg-red-200 border-none">Jest</Badge>
                    <Badge className="bg-red-100 text-red-700 hover:bg-red-200 border-none">Cypress</Badge>
                    <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-none">Tailwind CSS</Badge>
                    <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-none">Redux</Badge>
                  </div>
                </div>

                {/* Score Card */}
                <div className="mt-6 md:mt-0 md:ml-10 md:w-64 shrink-0">
                  <div className="bg-white rounded-lg shadow p-4">
                    <div className="text-center mb-2">
                      <div className="flex items-center justify-center mb-1">
                        <span className="text-3xl font-bold text-orange-500">2.9</span>
                        <span className="text-gray-500 text-sm">/5.0</span>
                        <button className="ml-1">
                          <Info className="w-4 h-4 text-gray-400" />
                        </button>
                      </div>
                      <div className="w-full h-2 bg-gray-200 rounded-full">
                        <div className="h-2 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full" style={{ width: '58%' }}></div>
                      </div>
                      <div className="flex justify-between text-xs mt-1 text-gray-500">
                        <span>Poor</span>
                        <span>Average</span>
                        <span>Excellent</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Main Content Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Interview Video Column */}
            <div className="lg:col-span-2">
              {/* Interview Video Player */}
              <Card className="mb-8 border-gray-200">
                <div className="bg-gray-900 rounded-t-lg">
                  <div className="px-4 py-2 border-b border-gray-700">
                    <h3 className="text-white text-sm font-medium">Introduction</h3>
                  </div>
                  <div className="aspect-video relative flex items-center justify-center">
                    <AspectRatio ratio={16/9}>
                      <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                        <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-600 transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                      </div>
                    </AspectRatio>
                  </div>
                </div>
                <CardContent className="p-4">
                  {/* Timeline Controls */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center">
                        <h3 className="font-semibold">Event Timeline</h3>
                        <Badge className="ml-2 bg-yellow-100 text-yellow-800 border-none">PREMIUM</Badge>
                        <button className="ml-1">
                          <Info className="w-4 h-4 text-gray-400" />
                        </button>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="flex items-center gap-1 bg-white">
                          <span>All Events</span>
                        </Badge>
                        <Badge variant="outline" className="flex items-center gap-1 bg-white">
                          <Mic className="w-3 h-3" /> Mic Off
                        </Badge>
                        <Badge variant="outline" className="flex items-center gap-1 bg-white">
                          <Camera className="w-3 h-3" /> Camera Off
                        </Badge>
                        <Badge variant="outline" className="flex items-center gap-1 bg-white">
                          <ScreenOff className="w-3 h-3" /> Screen Off
                        </Badge>
                      </div>
                    </div>
                    <div className="h-16 bg-blue-50 relative rounded-md">
                      {/* Timeline markers */}
                      <div className="absolute left-[20%] top-1/2 transform -translate-y-1/2 w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="absolute left-[40%] top-1/2 transform -translate-y-1/2 w-3 h-3 bg-orange-500 rounded-full"></div>
                      <div className="absolute left-[60%] top-1/2 transform -translate-y-1/2 w-3 h-3 bg-purple-500 rounded-full"></div>
                    </div>
                    <div className="flex justify-between items-center mt-2 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <button className="p-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9l-6 6m0 0l6 6m-6-6h18" />
                          </svg>
                        </button>
                        <button className="p-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                          </svg>
                        </button>
                        <button className="p-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          </svg>
                        </button>
                      </div>
                      <span>0:00 / 1:46</span>
                      <div className="flex items-center gap-1">
                        <button className="p-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 01-1.414-7.072m-2.122 9.9a9 9 0 010-12.728" />
                          </svg>
                        </button>
                        <button className="p-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Assessment Column */}
            <div>
              {/* AI Summary Card */}
              <Card className="mb-8 border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">AI Summary</h3>
                  <p className="text-sm text-gray-700 mb-4">
                    The candidate demonstrated <span className="text-green-600">strong technical knowledge in frontend development</span>, particularly in React and TypeScript. They effectively communicated their experience with microservices architecture and showed good problem-solving skills when discussing past projects. There were <span className="text-red-600">3 suspicious events detected during the interview</span>, including camera and microphone being turned off at certain points.
                  </p>
                  <button className="text-blue-600 text-sm hover:underline flex items-center gap-1">
                    Show more <ArrowRight className="w-3 h-3" />
                  </button>
                </CardContent>
              </Card>

              {/* Skill Assessment Card */}
              <Card className="border-gray-200">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold">Skill Assessment</h3>
                    </div>
                    <Badge className="bg-gray-100 text-gray-700 border-none">7 skills analyzed</Badge>
                  </div>

                  {/* Skill Bars */}
                  <div className="space-y-8">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-sm">Data Structures And Algorithms</span>
                        <span className="font-bold text-amber-500">3.0</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full mb-1">
                        <div className="h-2 rounded-full bg-amber-500" style={{ width: '60%' }}></div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>Beginner</span>
                        <span>Intermediate</span>
                        <span>Expert</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-sm">Operating Systems</span>
                        <span className="font-bold text-red-500">2.0</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full mb-1">
                        <div className="h-2 rounded-full bg-red-500" style={{ width: '40%' }}></div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>Beginner</span>
                        <span>Intermediate</span>
                        <span>Expert</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-sm">Databases</span>
                        <span className="font-bold text-amber-500">3.0</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full mb-1">
                        <div className="h-2 rounded-full bg-amber-500" style={{ width: '60%' }}></div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>Beginner</span>
                        <span>Intermediate</span>
                        <span>Expert</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CandidateReport;
