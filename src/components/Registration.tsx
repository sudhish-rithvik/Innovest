import React from 'react';
import { Trophy, Star, Award, Gift, Target, Zap } from 'lucide-react';

const Prizes = () => {
  const mainPrizes = [
    {
      title: "Winner",
      amount: "₹1,00,000",
      icon: Trophy,
      color: "text-yellow-600",
      bgColor: "bg-gradient-to-br from-yellow-400 to-yellow-600",
      description: "Grand Prize + Incubation Support"
    },
    {
      title: "Runner Up",
      amount: "₹50,000",
      icon: Star,
      color: "text-gray-600",
      bgColor: "bg-gradient-to-br from-gray-400 to-gray-600",
      description: "Second Prize + Mentorship"
    },
    {
      title: "Second Runner Up",
      amount: "₹25,000",
      icon: Award,
      color: "text-orange-600",
      bgColor: "bg-gradient-to-br from-orange-400 to-orange-600",
      description: "Third Prize + Industry Connect"
    }
  ];


  {/*add out partneres*/ }
  const specialPrizes = [
    { title: "Best AI/ML Innovation", amount: "₹1,00,000", icon: Zap },
    { title: "Best Social Impact Solution", amount: "₹1,00,000", icon: Target },
    { title: "Best Student Innovation", amount: "₹75,000", icon: Gift },
    { title: "Best IoT Solution", amount: "₹75,000", icon: Star },
    { title: "Best Fintech Innovation", amount: "₹50,000", icon: Award },
    { title: "Best Healthcare Solution", amount: "₹50,000", icon: Trophy }
  ];

  return (
    <section id="prizes" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Reward and Benefits
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Compete for substantial prizes and exclusive opportunities to accelerate your innovation journey.
          </p>
          <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg p-8 inline-block shadow-lg">
            <h3 className="text-2xl font-bold mb-2">Total Prize Pool</h3>
            <p className="text-5xl font-bold">₹10,00,000</p>
            <p className="text-lg opacity-90 mt-2">+ Incubation & Mentorship Worth ₹10L</p>
          </div>
        </div>

        {/* Main Prizes */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {mainPrizes.map((prize, index) => (
            <div key={index} className="bg-white rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className={`w-20 h-20 ${prize.bgColor} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                <prize.icon className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{prize.title}</h3>
              <p className="text-3xl font-bold text-orange-600 mb-3">{prize.amount}</p>
              <p className="text-gray-600">{prize.description}</p>
            </div>
          ))}
        </div>

        {/* Special Category Prizes */}
        <div className="bg-white rounded-lg p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Special Category Awards</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialPrizes.map((prize, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:bg-orange-50 transition-colors">
                <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <prize.icon className="h-6 w-6 text-orange-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{prize.title}</h4>
                <p className="text-xl font-bold text-orange-600">{prize.amount}</p>
              </div>
            ))}
          </div>
        </div>

      
      </div>
    </section>
  );
};

export default Prizes;


// import React, { useState } from 'react';
// import { Check, Star, Users, Calendar } from 'lucide-react';

// const Registration = () => {
//   const [selectedPlan, setSelectedPlan] = useState('standard');

//   const plans = [
//     {
//       id: 'student',
//       name: 'Student Pass',
//       price: '₹2,999',
//       originalPrice: '₹4,999',
//       description: 'Perfect for students and early-career professionals',
//       features: [
//         'Access to all main sessions',
//         'Networking lunch included',
//         'Digital resource kit',
//         'Certificate of participation',
//         'Student networking sessions'
//       ],
//       popular: false,
//       color: 'border-gray-200'
//     },
//     {
//       id: 'standard',
//       name: 'Standard Pass',
//       price: '₹8,999',
//       originalPrice: '₹12,999',
//       description: 'Ideal for professionals and entrepreneurs',
//       features: [
//         'Access to all sessions and workshops',
//         'All meals and refreshments',
//         'Networking events access',
//         'Digital and physical resource kit',
//         'One-on-one mentor sessions',
//         'Startup showcase participation',
//         'Certificate of participation'
//       ],
//       popular: true,
//       color: 'border-orange-500'
//     },
//     {
//       id: 'premium',
//       name: 'Premium Pass',
//       price: '₹15,999',
//       originalPrice: '₹19,999',
//       description: 'Complete access with exclusive benefits',
//       features: [
//         'All Standard Pass benefits',
//         'VIP seating at all events',
//         'Exclusive investor meetups',
//         'Private networking dinner',
//         'Priority access to speakers',
//         'Complimentary accommodation',
//         'Airport transfers included',
//         'Premium gift package'
//       ],
//       popular: false,
//       color: 'border-blue-500'
//     }
//   ];

//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     company: '',
//     designation: '',
//     category: 'professional'
//   });

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Handle form submission
//     console.log('Registration submitted:', { ...formData, plan: selectedPlan });
//   };

//   return (
//     <section id="registration" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
//             Event <span className="text-orange-500">Registration</span>
//           </h2>
//           <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//             Secure your spot at Innovest 2025 and be part of India's most prestigious innovation summit. 
//             Choose the pass that best fits your needs and goals.
//           </p>
//         </div>

//         {/* Early Bird Notice */}
//         <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl p-6 mb-12 text-center">
//           <div className="flex items-center justify-center mb-2">
//             <Calendar className="h-6 w-6 mr-2" />
//             <span className="font-bold text-lg">Early Bird Offer - Limited Time!</span>
//           </div>
//           <p className="text-lg">Save up to 40% on registration fees. Offer valid until January 31, 2025</p>
//         </div>

//         {/* Pricing Plans */}
//         <div className="grid lg:grid-cols-3 gap-8 mb-16">
//           {plans.map((plan) => (
//             <div 
//               key={plan.id}
//               className={`relative bg-white rounded-2xl shadow-lg border-2 ${plan.color} ${
//                 selectedPlan === plan.id ? 'ring-4 ring-orange-200' : ''
//               } transition-all duration-300 hover:shadow-xl`}
//             >
//               {plan.popular && (
//                 <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
//                   <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center">
//                     <Star className="h-4 w-4 mr-1" />
//                     Most Popular
//                   </span>
//                 </div>
//               )}

//               <div className="p-8">
//                 <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
//                 <p className="text-gray-600 mb-6">{plan.description}</p>
                
//                 <div className="mb-6">
//                   <div className="flex items-baseline">
//                     <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
//                     <span className="text-lg text-gray-500 line-through ml-2">{plan.originalPrice}</span>
//                   </div>
//                   <p className="text-sm text-gray-500 mt-1">Per person, all inclusive</p>
//                 </div>

//                 <ul className="space-y-3 mb-8">
//                   {plan.features.map((feature, index) => (
//                     <li key={index} className="flex items-start">
//                       <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
//                       <span className="text-gray-700">{feature}</span>
//                     </li>
//                   ))}
//                 </ul>

//                 <button
//                   onClick={() => setSelectedPlan(plan.id)}
//                   className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
//                     selectedPlan === plan.id
//                       ? 'bg-orange-500 text-white'
//                       : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                   }`}
//                 >
//                   {selectedPlan === plan.id ? 'Selected' : 'Select Plan'}
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Registration Form */}
//         <div className="max-w-2xl mx-auto">
//           <div className="bg-gray-50 rounded-2xl p-8">
//             <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
//               Complete Your Registration
//             </h3>
            
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     First Name *
//                   </label>
//                   <input
//                     type="text"
//                     name="firstName"
//                     required
//                     value={formData.firstName}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Last Name *
//                   </label>
//                   <input
//                     type="text"
//                     name="lastName"
//                     required
//                     value={formData.lastName}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Email Address *
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   required
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
//                 />
//               </div>

//               <div className="grid md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Phone Number *
//                   </label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     required
//                     value={formData.phone}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Category *
//                   </label>
//                   <select
//                     name="category"
//                     required
//                     value={formData.category}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
//                   >
//                     <option value="student">Student</option>
//                     <option value="professional">Professional</option>
//                     <option value="entrepreneur">Entrepreneur</option>
//                     <option value="investor">Investor</option>
//                     <option value="academic">Academic</option>
//                   </select>
//                 </div>
//               </div>

//               <div className="grid md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Company/Organization
//                   </label>
//                   <input
//                     type="text"
//                     name="company"
//                     value={formData.company}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Designation
//                   </label>
//                   <input
//                     type="text"
//                     name="designation"
//                     value={formData.designation}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
//                   />
//                 </div>
//               </div>

//               <div className="bg-white rounded-lg p-4 border border-gray-200">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <h4 className="font-semibold text-gray-900">Selected Plan</h4>
//                     <p className="text-gray-600">
//                       {plans.find(p => p.id === selectedPlan)?.name} - {plans.find(p => p.id === selectedPlan)?.price}
//                     </p>
//                   </div>
//                   <Users className="h-8 w-8 text-orange-500" />
//                 </div>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
//               >
//                 Complete Registration
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Registration;