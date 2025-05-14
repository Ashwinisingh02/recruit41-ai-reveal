
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const Product = () => {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <main>
        {/* Product Hero */}
        <section className="pt-32 pb-24 relative overflow-hidden bg-recruit-lightgray">
          <div className="container-wide">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="mb-6">Transform Your Hiring Process</h1>
              <p className="text-xl text-recruit-gray mb-10 max-w-2xl mx-auto">
                Discover how our AI-powered interview platform helps you find the perfect candidates faster and more effectively.
              </p>
              <Button className="button-primary text-base" size="lg">
                Get Started
              </Button>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="section-padding bg-white">
          <div className="container-wide">
            <div className="text-center mb-12">
              <h2>Key Features</h2>
              <p className="mt-4 max-w-2xl mx-auto">
                Our platform offers powerful tools to streamline your hiring process and find the best talent.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">AI-Powered Assessments</h3>
                  <p className="text-gray-600 mb-4">
                    Evaluate candidates objectively with our advanced AI that analyzes technical skills, problem-solving abilities, and communication.
                  </p>
                </CardContent>
              </Card>
              
              {/* Feature 2 */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Recorded Interviews</h3>
                  <p className="text-gray-600 mb-4">
                    Conduct remote interviews that are recorded for later review, with transcripts and key moment highlights.
                  </p>
                </CardContent>
              </Card>
              
              {/* Feature 3 - Candidate Reports with Link */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Detailed Candidate Reports</h3>
                  <p className="text-gray-600 mb-4">
                    Get comprehensive reports with skill assessments, AI-generated summaries, and interview highlights.
                  </p>
                  <Link to="/candidate-report" className="text-orange-500 font-medium inline-flex items-center hover:text-orange-600 transition-colors">
                    View Sample Report <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Demo Section */}
        <section className="section-padding bg-recruit-lightgray">
          <div className="container-wide">
            <div className="text-center">
              <h2>See the Platform in Action</h2>
              <p className="mt-4 mb-16 max-w-2xl mx-auto">
                Schedule a personalized demo to see how our platform can transform your hiring process.
              </p>
            </div>
            
            <div className="bg-white shadow-sm rounded-lg p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4 text-center">Ready to revolutionize your hiring?</h3>
              <div className="flex justify-center">
                <Button className="button-primary text-base" size="lg">
                  Schedule Demo
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Product;
