import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';





const AdoptPet = () => {
  const [petName, setPetName] = useState('');

  const handleAdopt = () => {
    // Handle pet adoption logic here
  };

  return (
    <div>
      <h2>Adopt a Pet</h2>
      <input 
        type="text" 
        placeholder="Pet Name" 
        value={petName} 
        onChange={(e) => setPetName(e.target.value)} 
      />
      <button onClick={handleAdopt}>Adopt</button>
    </div>
  );
};

export default AdoptPet;
