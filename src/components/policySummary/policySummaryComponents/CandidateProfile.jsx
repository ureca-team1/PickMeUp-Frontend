import React from 'react';

const CandidateProfile = ({ imgSrc, name, partyColor }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img
        src={imgSrc}
        alt={name}
        className={`mb-5 h-32 w-32 rounded-full border-[5px] border-black overflow-hidden ${partyColor} `}
      />
       <p className="text-center text-[24px] font-extrabold leading-[36px] md:text-[32px]">
        {name}
      </p>
    </div>
  );
};

export default CandidateProfile;
