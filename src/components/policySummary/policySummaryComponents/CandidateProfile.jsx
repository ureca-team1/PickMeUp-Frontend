import React from 'react';

const CandidateProfile = ({ imgSrc, name, partyColor }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img
        src={imgSrc}
        alt={name}
        className={`mb-2 h-32 w-32 rounded-full object-cover opacity-100 ${partyColor} `}
        style={{ border: '4px solid black' }}
      />
      <p className="text-center text-3xl font-bold">{name}</p>
    </div>
  );
};

export default CandidateProfile;
