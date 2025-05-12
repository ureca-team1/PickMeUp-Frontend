import React from 'react'
import PartyFilterButtons from './policySummaryComponents/PartyFilterButtons'
import CandidateSlider from './policySummaryComponents/CandidateSlider'
import PolicyList from './policySummaryComponents/PolicyList'

const PolicySummary = () => {
  return (
    <div>
      <section>
        <h2>공약 총정리</h2>
        <p>누구랑 잘 맞는지, 정책으로 비교해보세요</p>
        <p>핵심만 뽑아서 빠르게 정리했어요.</p>
      </section>

      <section>
        <PartyFilterButtons/>
      </section>

      <section>
        <CandidateSlider/>
      </section>

      <section>
        <PolicyList/>
      </section>
    </div>
  )
}

export default PolicySummary
//전체 페이지 컴포넌트