import React from 'react';
import { Linkedin, Twitter } from 'lucide-react';

const Speakers = () => {
  const speakers = [
    {
      name: "Dr. Rajesh Kumar",
      title: "Chief Technology Officer",
      company: "TechVentures India",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Leading expert in AI and Machine Learning with 15+ years of experience in building scalable tech solutions.",
      expertise: ["Artificial Intelligence", "Machine Learning", "Tech Strategy"],
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Priya Sharma",
      title: "Managing Partner",
      company: "Nexus Venture Partners",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Venture capitalist with a track record of investing in 50+ startups, specializing in early-stage technology companies.",
      expertise: ["Venture Capital", "Startup Ecosystem", "Investment Strategy"],
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Arjun Patel",
      title: "Founder & CEO",
      company: "GreenTech Solutions",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Serial entrepreneur focused on sustainable technology solutions, with successful exits in clean energy sector.",
      expertise: ["Sustainable Technology", "Clean Energy", "Entrepreneurship"],
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Dr. Meera Reddy",
      title: "Director of Innovation",
      company: "Bangalore Institute of Technology",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Research leader in IoT and smart city technologies, with 20+ patents and numerous publications.",
      expertise: ["Internet of Things", "Smart Cities", "Research & Development"],
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Vikram Singh",
      title: "Head of Digital Transformation",
      company: "Infosys Limited",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Digital transformation expert helping enterprises adopt emerging technologies and modernize their operations.",
      expertise: ["Digital Transformation", "Enterprise Technology", "Cloud Computing"],
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Kavya Nair",
      title: "Co-founder",
      company: "FinTech Innovations",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Fintech pioneer revolutionizing digital payments and financial inclusion across emerging markets.",
      expertise: ["Financial Technology", "Digital Payments", "Financial Inclusion"],
      social: {
        linkedin: "#",
        twitter: "#"
      }
    }
  ];

  return (
    <section id="speakers" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Keynote <span className="text-orange-500">Speakers</span>
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Learn from industry leaders, successful entrepreneurs, and visionary investors who are shaping 
            the future of technology and business across various sectors.
          </p>
        </div>

        {/* Speakers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              {/* Speaker Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={speaker.image} 
                  alt={speaker.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Social Links */}
                <div className="absolute bottom-4 right-4 flex space-x-2">
                  <a 
                    href={speaker.social.linkedin}
                    className="bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a 
                    href={speaker.social.twitter}
                    className="bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Speaker Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {speaker.name}
                </h3>
                <p className="text-orange-500 font-semibold mb-1">
                  {speaker.title}
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  {speaker.company}
                </p>
                
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  {speaker.bio}
                </p>

                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-2">
                  {speaker.expertise.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
};

export default Speakers;