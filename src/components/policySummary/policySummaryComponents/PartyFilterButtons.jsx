import React, { useState } from 'react';
import partyData from '../../../data/policies.json';

const PartyFilterButtons = ({ onFilterClick }) => {
  const [selectedParty, setSelectedParty] = useState(null); // 클릭된 정당 저장

  const handleClick = (partyName) => {
    setSelectedParty(partyName);
    onFilterClick(partyName);
  };

  return (
    <div className="flex flex-wrap gap-4">
      {partyData.map((party) => (
        <div key={party.party} className="flex gap-2">
          {party.candidates.map((candidate) => (
            <button
              key={candidate.name}
              onClick={() => handleClick(party.party)}
              className={`
                px-4 py-2 rounded-lg focus:outline-none transition-all duration-200
                ${selectedParty === party.party ? 'opacity-100 ring-5 ring-black text-white' : 'opacity-50 hover:opacity-100 text-white'}
              `}
              style={{ backgroundColor: party.color }}
            >
              {party.party}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PartyFilterButtons;


//정당 필터 버튼들