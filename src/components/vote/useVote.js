import React, { useState } from 'react';

const useVote = () => {
  const [selected, setSelected] = useState(null);

  const selectCandidate = (id) => {
    setSelected(id);
  };
  return {
    selected,
    selectCandidate,
  };
};

export default useVote;
