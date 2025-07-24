import React from 'react';
import { Clock, MapPin, User } from 'lucide-react';

// The RegisterButton component: Add your link in the // TODO area
const RegisterButton = ({ day /*, link*/ }) => (
  // TODO: Replace '#' with your actual registration URL for this day
  // Example: const link = '/register/day1';
  <a
    href="#"
    // href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="ml-4 bg-white text-blue-700 font-semibold px-4 py-2 rounded-lg shadow hover:bg-blue-100 transition-colors"
    onClick={e => {
      if (window.location.pathname === "#") e.preventDefault();
      alert(`Register for ${day}`);
    }}
  >
    Register
  </a>
);

const Schedule = () => {
  const days = [
    {
      date: "August 18, 2025",
      day: "Day 1",
      theme: "Not decided",
      registrationLink: "#", // TODO: Add actual registration link for Day 1 here
      events: [
        {
          time: "09:00 - 10:00",
          title: "Registration & Welcome Coffee",
          speaker: "",
          venue: "Main Lobby"
        },
        // ... more events ...
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
      date: "August 19, 2025",
      day: "Day 2",
      theme: "Deep Spirit",
      registrationLink: "#", // TODO: Add actual registration link for Day 2 here
      events: [
        {
          time: "09:30 - 10:30",
          title: "Venture Capital Trends",
          speaker: "Alex Rodriguez, Managing Partner",
          venue: "Main Auditorium"
        },
        // ... more events ...
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
      date: "August 20, 2025",
      day: "Day 3",
      theme: "Demo Day",
      registrationLink: "#", // TODO: Add actual registration link for Day 3 here
      events: [
        {
          time: "10:00 - 11:00",
          title: "AI & Machine Learning Revolution",
          speaker: "Dr. Michael Kim, AI Researcher",
          venue: "Tech Theater"
        },
        // ... more events ...
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
              {/* Header with Day and Register button (unique per box) */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{day.day}</h3>
                  <p className="text-blue-100 mb-1">{day.date}</p>
                  <p className="text-orange-300 font-medium">{day.theme}</p>
                </div>
                {/* Register button for this specific box */}
                <RegisterButton 
                  day={day.day} 
                  // Uncomment and set your link below:
                  // link={day.registrationLink}
                />
                {/* To use an actual link in future, use the line below: */}
                {/* <a href={day.registrationLink} target="_blank" rel="noopener noreferrer">Register</a> */}
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
