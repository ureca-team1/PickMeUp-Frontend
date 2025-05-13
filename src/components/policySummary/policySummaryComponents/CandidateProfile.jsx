import React from 'react';

const CandidateProfile = ({ imgSrc, name, partyColor }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img
        src={imgSrc}
        alt={name}
        className="w-32 h-32 rounded-full object-cover mb-2"
        style={{ backgroundColor: partyColor, border: '4px solid black' }}
      />
      <p className="text-3xl font-bold text-center">{name}</p>
    </div>
  );
};

export default CandidateProfile;
