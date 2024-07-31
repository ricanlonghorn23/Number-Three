import React, { useState } from 'react';

const Achievements = () => {
  const [achievements, setAchievements] = useState([]);

  return (
    <div>
      <h2>Achievements</h2>
      <ul>
        {achievements.map((achievement, index) => (
          <li key={index}>{achievement}</li>
        ))}
      </ul>
    </div>
  );
};

export default Achievements;
