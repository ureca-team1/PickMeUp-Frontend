import React, { useState } from 'react';
import PartyFilterButtons from './policySummaryComponents/PartyFilterButtons';
import policyData from '../../data/parties.json';
import policyDetails from '../../data/policies.json';
import CandidateInfo from './policySummaryComponents/CandidateInfo';

const PolicySummary = () => {
  const [selectedParty, setSelectedParty] = useState(null);

  const handleFilterClick = (party) => {
    setSelectedParty(party);
  };

  const selectedPartyData = policyData.find((data) => data.party === selectedParty);

  return (
    <div className="flex flex-col items-center justify-center text-center px-4 md:px-0">
      <section>
        <h2 className="text-3xl md:text-6xl font-bold mb-8">공약 총정리</h2>
        <div className="text-base md:text-2xl mb-8">
          <p className="mb-2">누구랑 잘 맞는지, 정책으로 비교해보세요</p>
          <p>핵심만 뽑아서 빠르게 정리했어요.</p>
        </div>
      </section>

      <section>
        <PartyFilterButtons
          parties={policyData.map((data) => data.party)}
          onFilterClick={handleFilterClick}
        />
      </section>

      {selectedParty && selectedPartyData && (
        <section>
          {selectedPartyData.candidates.map((candidate) => {
            const matchedPolicy = policyDetails.find((p) => p.name === candidate.policyRef);

            return (
              <CandidateInfo
                key={candidate.name}
                candidate={candidate}
                partyColor={selectedPartyData.color}
                policies={matchedPolicy?.categories || []} //여기서 전달
              />
            );
          })}
        </section>
      )}
    </div>
  );
};

export default PolicySummary;

//전체 페이지 컴포넌트

//전체 페이지 컴포넌트
