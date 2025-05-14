import { REGIONS } from '@/utils/constants.js';

const RegionSelect = ({ onRegionSelect }) => {
  return (
    <div className="mx-auto flex w-full max-w-[700px] items-center justify-between">
      <label
        htmlFor="region"
        className="whitespace-nowrap text-gray-700 md:text-lg dark:text-white"
      >
        어느 지역에 계신가요?
      </label>
      <select
        id="region"
        className="w-34 rounded-md border p-1.5 text-sm md:p-2 dark:bg-black dark:text-white"
        defaultValue=""
        onChange={(e) => {
          const regionId = Number(e.target.value);
          onRegionSelect(regionId);
        }}
      >
        <option value="" disabled>
          지역 선택
        </option>
        {Object.entries(REGIONS).map(([id, name]) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default RegionSelect;
