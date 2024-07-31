import React, { useState, useEffect } from 'react';

const PetStatus = () => {
  const [status, setStatus] = useState({
    happiness: 100,
    hunger: 0
  });

  useEffect(() => {
    // Logic to update pet status periodically
  }, []);

  return (
    <div>
      <h2>Pet Status</h2>
      <p>Happiness: {status.happiness}</p>
      <p>Hunger: {status.hunger}</p>
    </div>
  );
};

export default PetStatus;
