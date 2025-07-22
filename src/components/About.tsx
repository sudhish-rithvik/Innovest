import React from 'react';
import { Target, Lightbulb, Users, Award } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Our Mission",
      description: "To create a platform where innovative ideas meet strategic investments, fostering the next generation of breakthrough technologies and sustainable solutions."
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovation Focus",
      description: "Showcasing cutting-edge technologies in AI, IoT, Blockchain, Sustainable Energy, and emerging tech sectors that will shape our future."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Networking Hub",
      description: "Connect with industry leaders, successful entrepreneurs, venture capitalists, and fellow innovators in an environment designed for meaningful collaborations."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Recognition Platform",
      description: "Celebrate and reward outstanding innovations through our prestigious awards program, recognizing excellence across multiple categories."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        {/* cit chenbnai about */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-orange-500">Chennai Institute of Technology</span>
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Innovest 2025 is the premier innovation and investment summit that brings together the brightest minds, 
            most promising startups, and leading investors to shape the future of technology and business.
          </p>
        </div>
        {/* about citbif */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-orange-500">CITBIF</span>
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Innovest 2025 is the premier innovation and investment summit that brings together the brightest minds, 
            most promising startups, and leading investors to shape the future of technology and business.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Innovest offers
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Since its inception, Innovest has been at the forefront of fostering innovation and facilitating 
              meaningful connections between entrepreneurs and investors. Our summit serves as a catalyst for 
              groundbreaking collaborations that drive technological advancement and economic growth.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              This year, we're expanding our focus to include sustainable technologies, digital transformation, 
              and emerging markets, ensuring that innovation serves not just business interests but also 
              contributes to a better, more sustainable future for all.
            </p>
            
            {/* Key Statistics */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-blue-900 mb-1">₹10Cr+</div>
                <div className="text-sm text-gray-600">Total Funding Facilitated</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-blue-900 mb-1">200+</div>
                <div className="text-sm text-gray-600">Successful Partnerships</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-900 to-indigo-800 rounded-2xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-6">Why Attend Innovest 2025?</h4>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Access to exclusive investor networks and funding opportunities</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Learn from industry leaders and successful entrepreneurs</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Showcase your innovations to a global audience</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Network with like-minded innovators and thought leaders</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-orange-500 mb-4">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;