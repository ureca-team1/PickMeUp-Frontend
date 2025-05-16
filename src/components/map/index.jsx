import MapInfo from './mapComponents/MapInfo';
import MapList from './mapComponents/MapList';
import MapSearch from './mapComponents/MapSearch';

const Map = () => {
  return (
    <div className="mw-1280 mb-24 flex flex-col items-center md:mb-52">
      <MapSearch />
      <MapInfo />
      <MapList />
    </div>
  );
};

export default Map;
