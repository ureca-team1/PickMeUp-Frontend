import MapInfo from './mapComponents/MapInfo';
import MapList from './mapComponents/MapList';
import MapSearch from './mapComponents/MapSearch';

const Map = () => {
  return (
    <div className="mb-24 flex flex-col items-center justify-center px-4 text-center md:mb-52 md:px-0">
      <MapSearch />
      <MapInfo />
      <MapList />
    </div>
  );
};

export default Map;
