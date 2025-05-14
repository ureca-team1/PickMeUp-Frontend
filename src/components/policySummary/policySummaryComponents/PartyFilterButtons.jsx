import React, { useState } from 'react';
import partyData from '../../../data/parties.json';

const PartyFilterButtons = ({ onFilterClick }) => {
  const [selectedParty, setSelectedParty] = useState(null); // 클릭된 정당 저장

  const handleClick = (partyName) => {
    setSelectedParty(partyName);
    onFilterClick(partyName);
  };

  return (
    <div className="mb-15 flex flex-wrap justify-center gap-4">
      {partyData.map((party) => (
        <div key={party.party}>
          {party.candidates.map((candidate) => (
            <button
              key={candidate.name}
              onClick={() => handleClick(party.party)}
              className={`rounded-lg px-4 py-2 transition-all duration-200 ${party.color}  font-bold  text-center`}
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
