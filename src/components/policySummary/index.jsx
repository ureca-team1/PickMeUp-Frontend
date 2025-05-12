import React, { useState } from 'react';
import PartyFilterButtons from './policySummaryComponents/PartyFilterButtons';
import policyData from '../../data/policies.json';
import CandidateInfo from './policySummaryComponents/CandidateInfo';

const PolicySummary = () => {
  const [selectedParty, setSelectedParty] = useState(null);

  // 선택된 정당에 맞는 후보 정보 가져오기
  const handleFilterClick = (party) => {
    setSelectedParty(party);
  };

  // 선택된 정당의 후보 필터링
  const selectedPartyData = policyData.find(
    (data) => data.party === selectedParty
  );

  return (
    <div className="flex flex-col items-center justify-center">
      <section>
        <h2 className="text-2xl font-bold">공약 총정리</h2>
        <p>누구랑 잘 맞는지, 정책으로 비교해보세요</p>
        <p>핵심만 뽑아서 빠르게 정리했어요.</p>
      </section>

      <section>
        <PartyFilterButtons
          parties={policyData.map((data) => data.party)}
          onFilterClick={handleFilterClick}
        />
      </section>

      {selectedParty && selectedPartyData && (
        <section>
          <h3 className="text-xl font-semibold">{selectedParty}</h3>
          {selectedPartyData.candidates.map((candidate) => (
            <CandidateInfo key={candidate.name} candidate={candidate} />
          ))}
        </section>
      )}
    </div>
  );
};

export default PolicySummary;

//전체 페이지 컴포넌트