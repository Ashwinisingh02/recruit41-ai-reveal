import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
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
  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);
  const getHowItWorksLink = () => {
    return currentPath === '/' ? '/#how-it-works' : '/product#how-it-works';
  };
  return <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="container-wide flex items-center justify-between py-4">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-medium text-recruit-dark group">
            Recruit<span className="transition-colors text-gray-950">41</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/product" className="text-recruit-gray hover:text-recruit-dark transition-colors relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-orange-500 after:transition-all">
            Product
          </Link>
          <Link to={getHowItWorksLink()} className="text-recruit-gray hover:text-recruit-dark transition-colors relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-orange-500 after:transition-all">
            How It Works
          </Link>
          <Link to="/for-recruiters" className="text-recruit-gray hover:text-recruit-dark transition-colors relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-orange-500 after:transition-all">
            For Recruiters
          </Link>
          <Link to="/pricing" className="text-recruit-gray hover:text-recruit-dark transition-colors relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-orange-500 after:transition-all">
            Pricing
          </Link>
          <Link to="/about" className="text-recruit-gray hover:text-recruit-dark transition-colors relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-orange-500 after:transition-all">
            About
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500/5">
            Log In
          </Button>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white hover-lift">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu" aria-expanded={mobileMenuOpen}>
          {mobileMenuOpen ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>}
        </button>
      </div>

      {/* Mobile Menu with improved animation */}
      <div className={`md:hidden bg-white absolute w-full shadow-md transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="container-wide py-4 flex flex-col space-y-4">
          <Link to="/product" className="py-2 text-recruit-gray hover:text-recruit-dark transition-colors">
            Product
          </Link>
          <Link to={getHowItWorksLink()} className="py-2 text-recruit-gray hover:text-recruit-dark transition-colors">
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
    </header>;
};
export default NavBar;