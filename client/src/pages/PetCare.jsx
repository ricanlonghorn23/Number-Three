import React from 'react';

const PetCare = () => {
  const handleFeed = () => {
    // Handle feeding logic here
  };

  const handlePlay = () => {
    // Handle playing logic here
  };

  return (
    <div>
      <h2>Take Care of Your Pet</h2>
      <button onClick={handleFeed}>Feed</button>
      <button onClick={handlePlay}>Play</button>
    </div>
  );
};

export default PetCare;
