import React from 'react';
import MapSearch from './mapComponents/MapSearch';
import MapList from './mapComponents/MapList';
import MapInfo from './mapComponents/MapInfo';

const Map = () => {
  return (
    <div
      id="map"
      className="scroll-margin flex flex-col items-center justify-center px-4 text-center md:px-0"
    >
      <MapSearch />
      <MapInfo />
      <MapList />
    </div>
  );
};

export default Map;
