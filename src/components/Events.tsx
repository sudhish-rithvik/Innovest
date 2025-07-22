import React from 'react';
import { Clock, MapPin, User } from 'lucide-react';

const Schedule = () => {
  const days = [
    {
      date: "Augest 18, 2025",
      day: "Day 1",
      theme: "IgniteX",
      events: [
        {
          time: "09:00 - 10:00",
          title: "Registration & Welcome Coffee",
          speaker: "",
          venue: "Main Lobby"
        },
        {
          time: "10:00 - 11:00",
          title: "Opening Keynote: The Future of Innovation",
          speaker: "Dr. Sarah Chen, Tech Visionary",
          venue: "Main Auditorium"
        },
        {
          time: "11:30 - 12:30",
          title: "Panel: Emerging Technologies 2025",
          speaker: "Industry Leaders Panel",
          venue: "Conference Hall A"
        },
        {
          time: "14:00 - 15:00",
          title: "Startup Pitch Competition - Round 1",
          speaker: "Selected Startups",
          venue: "Innovation Theater"
        }
      ]
    },
    {
      date: "Augest 19, 2025",
      day: "Day 2",
      theme: "InnovestHack 2025",
      events: [
        {
          time: "09:30 - 10:30",
          title: "Venture Capital Trends",
          speaker: "Alex Rodriguez, Managing Partner",
          venue: "Main Auditorium"
        },
        {
          time: "11:00 - 12:00",
          title: "Workshop: Scaling Your Startup",
          speaker: "Interactive Session",
          venue: "Workshop Room B"
        },
        {
          time: "13:30 - 14:30",
          title: "Investor-Startup Matchmaking",
          speaker: "Networking Event",
          venue: "Exhibition Hall"
        },
        {
          time: "15:00 - 16:00",
          title: "Fireside Chat: Success Stories",
          speaker: "Unicorn Founders",
          venue: "Fireside Lounge"
        }
      ]
    },
    {
      date: "Augest 20, 2025",
      day: "Day 3",
      theme: "not decided",
      events: [
        {
          time: "10:00 - 11:00",
          title: "AI & Machine Learning Revolution",
          speaker: "Dr. Michael Kim, AI Researcher",
          venue: "Tech Theater"
        },
        {
          time: "11:30 - 12:30",
          title: "Sustainable Innovation Summit",
          speaker: "Green Tech Leaders",
          venue: "Sustainability Hub"
        },
        {
          time: "14:00 - 15:00",
          title: "Startup Pitch Finals & Awards",
          speaker: "Competition Finalists",
          venue: "Main Auditorium"
        },
        {
          time: "15:30 - 16:30",
          title: "Closing Ceremony & Networking",
          speaker: "All Participants",
          venue: "Grand Ballroom"
        }
      ]
    }
  ];

  return (
    <section id="schedule" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Event Schedule
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Three days packed with inspiring sessions, networking opportunities, and innovation showcases
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {days.map((day, dayIndex) => (
            <div key={dayIndex} className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{day.day}</h3>
                <p className="text-blue-100 mb-1">{day.date}</p>
                <p className="text-orange-300 font-medium">{day.theme}</p>
              </div>
              
              <div className="p-6 space-y-6">
                {day.events.map((event, eventIndex) => (
                  <div key={eventIndex} className="border-l-4 border-yellow-400 pl-4 hover:bg-gray-50 transition-colors duration-300 p-2 rounded-r-lg transform hover:translate-x-2">
                    <div className="flex items-center text-sm text-blue-600 mb-1">
                      <Clock size={16} className="mr-2" />
                      {event.time}
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">{event.title}</h4>
                    <div className="flex items-center text-sm text-purple-600 mb-1">
                      <User size={16} className="mr-2" />
                      {event.speaker}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin size={16} className="mr-2" />
                      {event.venue}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;


// import React from 'react';
// import { Calendar, Clock, MapPin, Users } from 'lucide-react';

// const Events = () => {
//   const events = [
//     {
//       title: "Startup Pitch Competition",
//       description: "Early-stage startups present their innovative solutions to a panel of expert judges and investors.",
//       date: "March 15, 2025",
//       time: "10:00 AM - 12:00 PM",
//       venue: "Main Auditorium",
//       category: "Competition",
//       participants: "50+ Startups",
//       prize: "₹10 Lakhs"
//     },
//     {
//       title: "Investor Panel Discussion",
//       description: "Leading VCs and angel investors share insights on current market trends and investment opportunities.",
//       date: "March 15, 2025",
//       time: "2:00 PM - 4:00 PM",
//       venue: "Conference Hall A",
//       category: "Panel",
//       participants: "20+ Investors",
//       prize: null
//     },
//     {
//       title: "Tech Innovation Showcase",
//       description: "Demonstration of cutting-edge technologies including AI, IoT, Blockchain, and emerging tech solutions.",
//       date: "March 16, 2025",
//       time: "9:00 AM - 6:00 PM",
//       venue: "Exhibition Center",
//       category: "Exhibition",
//       participants: "100+ Exhibitors",
//       prize: null
//     },
//     {
//       title: "Entrepreneurship Masterclass",
//       description: "Interactive workshops led by successful entrepreneurs covering business strategy, scaling, and leadership.",
//       date: "March 16, 2025",
//       time: "11:00 AM - 1:00 PM",
//       venue: "Workshop Rooms",
//       category: "Workshop",
//       participants: "Limited to 200",
//       prize: null
//     },
//     {
//       title: "Sustainable Innovation Awards",
//       description: "Recognition ceremony for outstanding innovations in sustainability, clean tech, and social impact.",
//       date: "March 17, 2025",
//       time: "6:00 PM - 8:00 PM",
//       venue: "Grand Ballroom",
//       category: "Awards",
//       participants: "All Attendees",
//       prize: "Multiple Categories"
//     },
//     {
//       title: "Networking Gala Dinner",
//       description: "Exclusive networking event bringing together all participants for meaningful connections and collaborations.",
//       date: "March 17, 2025",
//       time: "8:00 PM - 11:00 PM",
//       venue: "Rooftop Terrace",
//       category: "Networking",
//       participants: "VIP Access",
//       prize: null
//     }
//   ];

//   const getCategoryColor = (category: string) => {
//     const colors = {
//       Competition: "bg-red-100 text-red-800",
//       Panel: "bg-blue-100 text-blue-800",
//       Exhibition: "bg-green-100 text-green-800",
//       Workshop: "bg-purple-100 text-purple-800",
//       Awards: "bg-yellow-100 text-yellow-800",
//       Networking: "bg-indigo-100 text-indigo-800"
//     };
//     return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800";
//   };

//   return (
//     <section id="events" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
//             Event <span className="text-orange-500">Schedule</span>
//           </h2>
//           <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//             Three days packed with inspiring sessions, networking opportunities, and groundbreaking innovations. 
//             Join us for an unforgettable experience that will shape the future of technology and business.
//           </p>
//         </div>

//         {/* Events Grid */}
//         <div className="grid lg:grid-cols-2 gap-8">
//           {events.map((event, index) => (
//             <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100">
//               <div className="flex items-start justify-between mb-4">
//                 <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor(event.category)}`}>
//                   {event.category}
//                 </span>
//                 {event.prize && (
//                   <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold">
//                     {event.prize}
//                   </span>
//                 )}
//               </div>

//               <h3 className="text-xl font-bold text-gray-900 mb-3">
//                 {event.title}
//               </h3>
              
//               <p className="text-gray-600 mb-6 leading-relaxed">
//                 {event.description}
//               </p>

//               <div className="space-y-3">
//                 <div className="flex items-center text-gray-700">
//                   <Calendar className="h-5 w-5 text-orange-500 mr-3" />
//                   <span className="font-medium">{event.date}</span>
//                 </div>
                
//                 <div className="flex items-center text-gray-700">
//                   <Clock className="h-5 w-5 text-orange-500 mr-3" />
//                   <span>{event.time}</span>
//                 </div>
                
//                 <div className="flex items-center text-gray-700">
//                   <MapPin className="h-5 w-5 text-orange-500 mr-3" />
//                   <span>{event.venue}</span>
//                 </div>
                
//                 <div className="flex items-center text-gray-700">
//                   <Users className="h-5 w-5 text-orange-500 mr-3" />
//                   <span>{event.participants}</span>
//                 </div>
//               </div>

//               <div className="mt-6 pt-4 border-t border-gray-200">
//                 <button className="text-orange-500 hover:text-orange-600 font-semibold transition-colors duration-200">
//                   Learn More →
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Call to Action */}
//         <div className="text-center mt-16">
//           <div className="bg-gradient-to-r from-blue-900 to-indigo-800 rounded-2xl p-8 text-white">
//             <h3 className="text-2xl font-bold mb-4">Don't Miss Out!</h3>
//             <p className="text-lg mb-6 opacity-90">
//               Register now to secure your spot at India's premier innovation summit
//             </p>
//             <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
//               Register for Events
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Events;