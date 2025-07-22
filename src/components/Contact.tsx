import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Contact form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      details: ["info@innovest2025.com", "support@innovest2025.com"],
      description: "Get in touch for any queries or support"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      details: ["+91 98765 43210", "+91 87654 32109"],
      description: "Speak directly with our team"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Visit Us",
      details: ["Chennai Trade Centre", "Nandambakkam, Chennai - 600089"],
      description: "Event venue and registration desk"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Contact <span className="text-orange-500">Us</span>
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have questions about Innovest 2025? We're here to help! Reach out to us through any of the
            channels below or send us a message using the contact form.
          </p>
        </div>

        {/* Get in Touch Boxes */}
        <div className="max-w-6xl mx-auto w-full flex flex-col space-y-6">
          {/* Row 1: Email Us & Call Us side by side */}
          <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-6 sm:space-y-0 w-full">
            {/* Email Us */}
            <div className="flex flex-col items-center space-y-4 p-6 bg-white rounded-lg shadow-md flex-1 text-center">
              <div className="text-orange-500">
                {contactInfo[0].icon}
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">{contactInfo[0].title}</h4>
                {contactInfo[0].details.map((detail, detailIndex) => (
                  <p key={detailIndex} className="text-gray-700 font-medium">
                    {detail}
                  </p>
                ))}
                <p className="text-gray-600 text-sm mt-1">{contactInfo[0].description}</p>
              </div>
            </div>

            {/* Call Us */}
            <div className="flex flex-col items-center space-y-4 p-6 bg-white rounded-lg shadow-md flex-1 text-center">
              <div className="text-orange-500">
                {contactInfo[1].icon}
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">{contactInfo[1].title}</h4>
                {contactInfo[1].details.map((detail, detailIndex) => (
                  <p key={detailIndex} className="text-gray-700 font-medium">
                    {detail}
                  </p>
                ))}
                <p className="text-gray-600 text-sm mt-1">{contactInfo[1].description}</p>
              </div>
            </div>
          </div>

          {/* Row 2: Visit Us full width and centered */}
          <div className="flex justify-center w-full">
            <div className="flex flex-col items-center space-y-4 p-6 bg-white rounded-lg shadow-md w-full max-w-4xl text-center">
              <div className="text-orange-500">
                {contactInfo[2].icon}
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">{contactInfo[2].title}</h4>
                {contactInfo[2].details.map((detail, detailIndex) => (
                  <p key={detailIndex} className="text-gray-700 font-medium">
                    {detail}
                  </p>
                ))}
                <p className="text-gray-600 text-sm mt-1">{contactInfo[2].description}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
