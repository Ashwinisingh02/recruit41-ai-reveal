
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-recruit-lightgray pt-16 pb-10">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Link to="/" className="text-2xl font-medium text-recruit-dark inline-block mb-4">
              Recruit<span className="text-recruit-blue">41</span>
            </Link>
            <p className="text-sm text-recruit-gray mb-6 max-w-md">
              Revolutionizing the hiring process with AI-powered interviews. 
              Find the right talent, every time.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-recruit-dark mb-4">Product</h3>
            <ul className="space-y-3">
              <li><Link to="/product" className="text-sm text-recruit-gray hover:text-recruit-dark transition-colors">Features</Link></li>
              <li><Link to="/product" className="text-sm text-recruit-gray hover:text-recruit-dark transition-colors">Interview Builder</Link></li>
              <li><Link to="/product" className="text-sm text-recruit-gray hover:text-recruit-dark transition-colors">AI Analysis</Link></li>
              <li><Link to="/product" className="text-sm text-recruit-gray hover:text-recruit-dark transition-colors">Integrations</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-recruit-dark mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-recruit-gray hover:text-recruit-dark transition-colors">Blog</a></li>
              <li><a href="#" className="text-sm text-recruit-gray hover:text-recruit-dark transition-colors">Documentation</a></li>
              <li><a href="#" className="text-sm text-recruit-gray hover:text-recruit-dark transition-colors">Guides</a></li>
              <li><a href="#" className="text-sm text-recruit-gray hover:text-recruit-dark transition-colors">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-recruit-dark mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-recruit-gray hover:text-recruit-dark transition-colors">About Us</Link></li>
              <li><a href="#" className="text-sm text-recruit-gray hover:text-recruit-dark transition-colors">Careers</a></li>
              <li><a href="#" className="text-sm text-recruit-gray hover:text-recruit-dark transition-colors">Press</a></li>
              <li><a href="#" className="text-sm text-recruit-gray hover:text-recruit-dark transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-recruit-gray mb-4 md:mb-0">
            &copy; 2025 Recruit41. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-xs text-recruit-gray hover:text-recruit-dark transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-recruit-gray hover:text-recruit-dark transition-colors">Terms of Service</a>
            <a href="#" className="text-xs text-recruit-gray hover:text-recruit-dark transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
