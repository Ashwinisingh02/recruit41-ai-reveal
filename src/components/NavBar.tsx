
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="container-wide flex items-center justify-between py-4">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-medium text-recruit-dark">
            Recruit<span className="text-orange-500">41</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/product" className="text-recruit-gray hover:text-recruit-dark transition-colors">
            Product
          </Link>
          <Link to="/product#how-it-works" className="text-recruit-gray hover:text-recruit-dark transition-colors">
            How It Works
          </Link>
          <Link to="/for-recruiters" className="text-recruit-gray hover:text-recruit-dark transition-colors">
            For Recruiters
          </Link>
          <Link to="/pricing" className="text-recruit-gray hover:text-recruit-dark transition-colors">
            Pricing
          </Link>
          <Link to="/about" className="text-recruit-gray hover:text-recruit-dark transition-colors">
            About
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500/5">
            Log In
          </Button>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-white absolute w-full shadow-md transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8 pointer-events-none'}`}>
        <div className="container-wide py-4 flex flex-col space-y-4">
          <Link to="/product" className="py-2 text-recruit-gray hover:text-recruit-dark transition-colors">
            Product
          </Link>
          <Link to="/product#how-it-works" className="py-2 text-recruit-gray hover:text-recruit-dark transition-colors">
            How It Works
          </Link>
          <Link to="/for-recruiters" className="py-2 text-recruit-gray hover:text-recruit-dark transition-colors">
            For Recruiters
          </Link>
          <Link to="/pricing" className="py-2 text-recruit-gray hover:text-recruit-dark transition-colors">
            Pricing
          </Link>
          <Link to="/about" className="py-2 text-recruit-gray hover:text-recruit-dark transition-colors">
            About
          </Link>
          <div className="flex flex-col space-y-2 pt-2">
            <Button variant="outline" className="border-orange-500 text-orange-500 w-full justify-center">
              Log In
            </Button>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full justify-center">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
