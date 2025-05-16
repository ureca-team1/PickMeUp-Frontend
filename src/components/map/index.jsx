import MapInfo from './mapComponents/MapInfo';
import MapList from './mapComponents/MapList';
import MapSearch from './mapComponents/MapSearch';

const Map = () => {
  return (
    <div className="mw-1280 flex flex-col items-center pb-32 md:pb-52">
      <MapSearch />
      <MapInfo />
      <MapList />
    </div>
  );
};

export default Map;
