const CandidateProfile = ({ imgSrc, name, profileColor }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 md:gap-6">
      <div
        className={`h-20 w-20 overflow-hidden rounded-full border-[5px] border-black md:h-[100px] md:w-[100px] ${profileColor}`}
      >
        <img src={imgSrc} alt={name} className="h-full w-full object-cover" />
      </div>
      <p className="text-center text-2xl font-extrabold md:text-[2rem]">{name}</p>
    </div>
  );
};

export default CandidateProfile;
