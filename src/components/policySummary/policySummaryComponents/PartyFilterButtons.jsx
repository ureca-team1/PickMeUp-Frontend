import partyData from '@/data/parties.json';

const TabButton = ({ children, className, ...restProps }) => {
  const defaultClassName =
    'rounded-full px-2.5 py-1.5 text-center text-sm transition-all duration-200 md:px-[18px] md:py-2 md:text-xl';

  return (
    <button className={`${defaultClassName} ${className}`} {...restProps}>
      {children}
    </button>
  );
};

const PartyFilterButtons = ({ onFilterClick, selectedParty }) => {
  const handleClick = (partyName) => onFilterClick(partyName);
  const generateClassName = (partyItem) => {
    return selectedParty === partyItem.party
      ? `${partyItem.color} ${partyItem.party === '민주노동당' ? 'text-black' : 'text-white'}`
      : 'bg-secondary text-independent';
  };

  return (
    <div className="mb-11 flex flex-wrap justify-center gap-4 md:mb-16">
      {partyData.map((item) => (
        <div key={item.party}>
          {item.candidates.map((candidate) => (
            <TabButton
              key={candidate.name}
              onClick={() => handleClick(item.party)}
              className={generateClassName(item)}
            >
              {item.party}
            </TabButton>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PartyFilterButtons;
