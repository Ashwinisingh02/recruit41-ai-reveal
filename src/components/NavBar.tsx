import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';
const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const {
    theme,
    toggleTheme
  } = useTheme();
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
  return <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="container-wide flex items-center justify-between py-4">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img src="/lovable-uploads/54cf43bf-2915-4155-8520-540b930fb013.png" alt="Recruit41 Logo" className="h-12 w-auto" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/product" className="text-recruit-gray dark:text-gray-300 hover:text-recruit-dark dark:hover:text-white transition-colors relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-orange-500 after:transition-all">
            Product
          </Link>
          <Link to={getHowItWorksLink()} className="text-recruit-gray dark:text-gray-300 hover:text-recruit-dark dark:hover:text-white transition-colors relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-orange-500 after:transition-all">
            How It Works
          </Link>
          <Link to="/for-recruiters" className="text-recruit-gray dark:text-gray-300 hover:text-recruit-dark dark:hover:text-white transition-colors relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-orange-500 after:transition-all">
            For Recruiters
          </Link>
          <Link to="/pricing" className="text-recruit-gray dark:text-gray-300 hover:text-recruit-dark dark:hover:text-white transition-colors relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-orange-500 after:transition-all">
            Pricing
          </Link>
          <Link to="/about" className="text-recruit-gray dark:text-gray-300 hover:text-recruit-dark dark:hover:text-white transition-colors relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-orange-500 after:transition-all">
            About
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full" aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}>
            {theme === 'dark' ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5 text-gray-700" />}
          </Button>
          <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500/5 dark:border-orange-400 dark:text-orange-400 dark:hover:bg-orange-400/10">
            Log In
          </Button>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white hover-lift dark:bg-orange-600 dark:hover:bg-orange-700">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-2 md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full" aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}>
            {theme === 'dark' ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5 text-gray-700" />}
          </Button>
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu" aria-expanded={mobileMenuOpen}>
            {mobileMenuOpen ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 dark:text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 dark:text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>}
          </button>
        </div>
      </div>

      {/* Mobile Menu with improved animation */}
      <div className={`md:hidden bg-white dark:bg-gray-900 absolute w-full shadow-md transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="container-wide py-4 flex flex-col space-y-4">
          <Link to="/product" className="py-2 text-recruit-gray dark:text-gray-300 hover:text-recruit-dark dark:hover:text-white transition-colors">
            Product
          </Link>
          <Link to={getHowItWorksLink()} className="py-2 text-recruit-gray dark:text-gray-300 hover:text-recruit-dark dark:hover:text-white transition-colors">
            How It Works
          </Link>
          <Link to="/for-recruiters" className="py-2 text-recruit-gray dark:text-gray-300 hover:text-recruit-dark dark:hover:text-white transition-colors">
            For Recruiters
          </Link>
          <Link to="/pricing" className="py-2 text-recruit-gray dark:text-gray-300 hover:text-recruit-dark dark:hover:text-white transition-colors">
            Pricing
          </Link>
          <Link to="/about" className="py-2 text-recruit-gray dark:text-gray-300 hover:text-recruit-dark dark:hover:text-white transition-colors">
            About
          </Link>
          <div className="flex flex-col space-y-2 pt-2">
            <Button variant="outline" className="border-orange-500 text-orange-500 dark:border-orange-400 dark:text-orange-400 w-full justify-center">
              Log In
            </Button>
            <Button className="bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 text-white w-full justify-center">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>;
};
export default NavBar;