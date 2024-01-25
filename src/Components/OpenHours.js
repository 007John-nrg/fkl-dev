import React, { useState } from 'react';

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
        {/* Display open hours for the current day */}
        <li>{getDayOfWeek(currentDay)}: {openHours[currentDay]}</li>
        {/* Display arrow to toggle additional open hours */}
        <li onClick={() => setShowAllHours(!showAllHours)} className="toggle-arrow">
          {/* {showAllHours ? 'Hide' : 'Show'} other days */}
          
        </li>
        {/* Display additional open hours if toggled */}
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

// Function to get the day of the week from its index
const getDayOfWeek = (dayIndex) => {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return daysOfWeek[dayIndex];
};

export default OpenHours;
