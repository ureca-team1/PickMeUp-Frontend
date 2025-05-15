import CandidateProfile from './CandidateProfile';
import CandidateSlider from './CandidateSlider';
import PolicyList from './PolicyList';

const CandidateInfo = ({ candidate, profileColor, policies }) => {
  return (
    <div className="candidate-info">
      {/* md 이상에서는 1200px, 그 외는 full */}
      <CandidateProfile
        imgSrc={candidate.image}
        name={candidate.name}
        profileColor={profileColor}
      />
      <CandidateSlider candidate={candidate} />
      <PolicyList policies={policies} /> {/* 공약 리스트 전달 */}
    </div>
  );
};

export default CandidateInfo;
