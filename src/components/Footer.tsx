import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Events', href: '#events' },
    { name: 'Speakers', href: '#speakers' },
    { name: 'Registration', href: '#registration' },
    { name: 'Contact', href: '#contact' }
  ];

  const eventInfo = [
    { name: 'Schedule', href: '#schedule' },
    { name: 'Venue Details', href: '#venue' },
    { name: 'Accommodation', href: '#accommodation' },
    { name: 'Travel Guide', href: '#travel' },
    { name: 'FAQ', href: '#faq' }
  ];

  const resources = [
    { name: 'Startup Guidelines', href: '#guidelines' },
    { name: 'Investor Resources', href: '#investor-resources' },
    { name: 'Media Kit', href: '#media-kit' },
    { name: 'Past Events', href: '#past-events' },
    { name: 'Testimonials', href: '#testimonials' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-bold mb-4">
              INNOVEST <span className="text-orange-500">2025</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              India's premier innovation and investment summit, bringing together entrepreneurs, 
              investors, and thought leaders to shape the future of technology and business.
            </p>
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-500" />
                <span className="text-gray-300">info@innovest2025.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-500" />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-orange-500" />
                <span className="text-gray-300">Chennai, India</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links and Social Media */}
          <div className="lg:col-start-4">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-orange-500 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                <a 
                  href="#"
                  className="bg-gray-800 p-2 rounded-full hover:bg-orange-500 transition-colors duration-200"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="#"
                  className="bg-gray-800 p-2 rounded-full hover:bg-orange-500 transition-colors duration-200"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a 
                  href="#"
                  className="bg-gray-800 p-2 rounded-full hover:bg-orange-500 transition-colors duration-200"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a 
                  href="#"
                  className="bg-gray-800 p-2 rounded-full hover:bg-orange-500 transition-colors duration-200"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;