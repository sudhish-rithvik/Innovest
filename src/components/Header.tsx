import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import citLogo from '../img/CIT Logo Yellow-Autonomous(1).png';
import citbifLogo from '../img/CITBIF logo Final-02 (1).png';
import innovest from '../img/innovest.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Events', href: '#events', hasDropdown: true },
    { name: 'Speakers', href: '#speakers' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Registration', href: '#registration' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/20 backdrop-blur-xl shadow-lg border-b border-white/20' 
        : 'bg-white shadow-lg'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2">
          {/* Logo */}
          <div className="flex items-center space-x-4 relative -left-4">
            <img 
              src={citLogo} 
              alt="CIT Logo" 
              className="h-10 w-auto object-contain"
            />
            <div className="relative h-14 flex items-center">
              <img 
                src={citbifLogo} 
                alt="CITBIF Logo" 
                className="h-14 w-auto object-contain scale-[1.5] translate-y-0"
              />
            </div>
            <div className="relative h-14 flex items-center">
              <img 
                src={innovest} 
                alt="Innovest Logo" 
                className="h-14 w-auto object-contain scale-[0.7] translate-y-0"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                <a
                  href={item.href}
                  className="text-gray-700 hover:text-blue-900 px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center"
                  onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.name}
                  {item.hasDropdown && <ChevronDown className="ml-1 h-4 w-4" />}
                </a>
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-900"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-900 block px-3 py-2 text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
