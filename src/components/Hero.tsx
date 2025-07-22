import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';
import CountdownTimer from './CountdownTimer';
import innovestLogo from '../img/innovest.png';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 min-h-screen flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="mb-6 flex flex-col items-start">
              <img 
                src={innovestLogo} 
                alt="Innovest Logo" 
                className="h-28 md:h-40 w-auto mb-6 drop-shadow-lg"
              />
              <p className="text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed">
                Empowering Innovation, Inspiring Excellence
              </p>
              <p className="text-lg text-blue-200 mb-8 max-w-2xl">
                Join us for the most prestigious innovation and investment summit where groundbreaking ideas meet visionary investors. Experience the future of technology, entrepreneurship, and sustainable innovation.
              </p>
            </div>

            {/* Event Details */}
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center space-x-3">
                <Calendar className="h-6 w-6 text-orange-400" />
                <div>
                  <p className="text-sm text-blue-200">Date</p>
                  <p className="font-semibold">Augest 18 - 20, 2025</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-6 w-6 text-orange-400" />
                <div>
                  <p className="text-sm text-blue-200">Venue</p>
                  <p className="font-semibold">Chennai, India</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="h-6 w-6 text-orange-400" />
                <div>
                  <p className="text-sm text-blue-200">Expected</p>
                  <p className="font-semibold">3000+ Attendees</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Register Now
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Right side - Stats/Features and Countdown Timer */}
          <div className="lg:pl-12">
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center text-white">
                <div className="text-3xl font-bold text-orange-400 mb-2">65+</div>
                <div className="text-sm">Startups</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center text-white">
                <div className="text-3xl font-bold text-orange-400 mb-2">18+</div>
                <div className="text-sm">Investors</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center text-white">
                <div className="text-3xl font-bold text-orange-400 mb-2">25+</div>
                <div className="text-sm">Speakers</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center text-white">
                <div className="text-3xl font-bold text-orange-400 mb-2">₹10L+</div>
                <div className="text-sm">Funding Pool</div>
              </div>
            </div>
            <CountdownTimer />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
  
};

export default Hero;