import React, { useState } from 'react';
import './components.css';

const OpenHours = () => {
  const currentDay = new Date().getDay();

  const openHours = [
    "Closed",
    "8:00 AM - 5:30 PM",
    "8:00 AM - 5:30 PM",
    "8:00 AM - 5:30 PM",
    "8:00 AM - 5:30 PM",
    "8:00 AM - 5:30 PM",
    "9:00 AM - 1:00 PM",
  ];

  const [showAllHours, setShowAllHours] = useState(false);

  return (
    <div className="open-hours">
      <h2>Hours</h2>
      <ul>
        <li className="selected">{getDayOfWeek(currentDay)}: {openHours[currentDay]}</li>
        <li onClick={() => setShowAllHours(!showAllHours)} className="toggle-arrow">
          {showAllHours ? 'Hide' : 'Show'} other days {/* Toggle arrow text */}
        </li>
        {showAllHours && (
          openHours.map((hours, index) => (
            index !== currentDay && (
              <li key={index}>{getDayOfWeek(index)}: {hours}</li>
            )
          ))
        )}
      </ul>
    </div>
  );
};

const getDayOfWeek = (dayIndex) => {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return daysOfWeek[dayIndex];
};

export default OpenHours;
