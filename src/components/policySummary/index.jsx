import policyData from '@/data/parties.json';
import policyDetails from '@/data/policies.json';
import { useState } from 'react';
import MainParagraph from '../common/MainParagraph.jsx';
import MainTitle from '../common/MainTitle.jsx';
import CandidateInfo from './policySummaryComponents/CandidateInfo';
import PartyFilterButtons from './policySummaryComponents/PartyFilterButtons';

const PolicySummary = () => {
  const [selectedParty, setSelectedParty] = useState(policyData[0].party);

  const handleFilterClick = (party) => {
    setSelectedParty(party);
  };

  const selectedPartyData = policyData.find((data) => data.party === selectedParty);

  return (
    <div className="mb-32 flex flex-col items-center justify-center px-4 text-center md:px-0">
      <div className="mb-8 md:mb-11">
        <MainTitle>공약 총정리</MainTitle>
        <MainParagraph>
          누구랑 잘 맞는지, 정책으로 비교해보세요.
          <br />
          핵심만 뽑아서 빠르게 정리했어요.
        </MainParagraph>
      </div>

      <PartyFilterButtons selectedParty={selectedParty} onFilterClick={handleFilterClick} />

      <div className="w-full md:max-w-[730px]">
        {selectedPartyData.candidates.map((candidate) => {
          const matchedPolicy = policyDetails.find((p) => p.name === candidate.policyRef);
          return (
            <CandidateInfo
              key={candidate.name}
              candidate={candidate}
              profileColor={candidate.color}
              policies={matchedPolicy?.categories || []} //여기서 전달
            />
          );
        })}
      </div>
    </div>
  );
};

export default PolicySummary;

//전체 페이지 컴포넌트
