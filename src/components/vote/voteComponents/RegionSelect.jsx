import React from 'react';

// 백엔드 지역 그대로 가져왔습니다.
const REGIONS = {
  1: '서울',
  2: '인천/경기',
  3: '대전/세종/충청',
  4: '광주/전라',
  5: '대구/경북',
  6: '부산/울산/경남',
  7: '강원/제주',
};

const RegionSelect = ({ onRegionSelect }) => {
  return (
    <div className="flex w-full items-center justify-between">
      <label htmlFor="region" className="text-lg whitespace-nowrap text-gray-700 dark:text-white">
        어느 지역에 계신가요?
      </label>
      <select
        id="region"
        className="w-34 rounded-md border p-2 text-sm sm:w-34 dark:bg-black dark:text-white"
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
