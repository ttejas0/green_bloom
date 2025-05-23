import React, { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Workshops', href: '#workshops' },
    { name: 'For Restaurants', href: '#restaurants' },
    { name: 'Contact', href: '#contact' }
  ];
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen ? 'bg-white shadow-md' : 'bg-transparent lg:bg-transparent'
      }`}
    >
      <Container className="h-20">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <div className="flex items-center">
            <Leaf className="h-8 w-8 text-green-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">GreenBloom</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          {/* CTA Button (Desktop) */}
          <div className="hidden lg:block">
            <Button variant="primary">Subscribe Now</Button>
          </div>
          
          {/* Mobile/Tablet Menu Button */}
          <button 
            className="lg:hidden p-2 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-900" />
            ) : (
              <Menu className="h-6 w-6 text-gray-900" />
            )}
          </button>
        </div>
        
        {/* Mobile/Tablet Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg lg:hidden">
            <Container>
              <nav className="py-6 flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <a 
                    key={link.name}
                    href={link.href}
                    className="text-base font-medium text-gray-700 hover:text-green-600 transition-colors px-4"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <div className="px-4">
                  <Button variant="primary" className="w-full">
                    Subscribe Now
                  </Button>
                </div>
              </nav>
            </Container>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header;