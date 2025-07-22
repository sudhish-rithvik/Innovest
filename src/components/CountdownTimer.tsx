import React, { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // set timer function
    const now = new Date();
    const targetDate = new Date(now.getTime() + (1 * 60 * 60 * 1000)); // setting time

    const timer = setInterval(() => {
      const currentTime = new Date().getTime();
      const difference = targetDate.getTime() - currentTime;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 animate-fade-in animation-delay-500">
      <h3 className="text-white text-xl font-semibold text-center mb-6">Event Starts In</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {timeUnits.map((unit, index) => (
          <div
            key={unit.label}
            className="text-center animate-fade-in"
            style={{ animationDelay: `${600 + index * 100}ms` }}
          >
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 hover:bg-white/30 transition-all duration-300 transform hover:scale-105">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2 animate-pulse">
                {unit.value.toString().padStart(2, '0')}
              </div>
              <div className="text-white text-sm font-medium uppercase tracking-wider">
                {unit.label}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <p className="text-white/80 text-sm">
          Countdown: 1 Hour
        </p>
      </div>
    </div>
  );
};

export default CountdownTimer;