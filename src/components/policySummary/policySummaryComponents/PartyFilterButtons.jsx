import React, { useState } from 'react';
import partyData from '../../../data/parties.json';

const PartyFilterButtons = ({ onFilterClick }) => {
  const [selectedParty, setSelectedParty] = useState(null); // 클릭된 정당 저장

  const handleClick = (partyName) => {
    setSelectedParty(partyName);
    onFilterClick(partyName);
  };

  return (
    <div className="flex flex-wrap gap-4 justify-cneter mb-8">
      {partyData.map((party) => (
        <div key={party.party}>
          {party.candidates.map((candidate) => (
            <button
              key={candidate.name}
              onClick={() => handleClick(party.party)}
              style={{
                backgroundColor: party.color,
                color: party.party === '민주노동당' ? 'black' : 'white',
                opacity: 0.7,
                border: selectedParty === party.party ? '2px solid white' : 'none',
              }}
              className="px-4 py-2 rounded-lg transition-all duration-200"
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
