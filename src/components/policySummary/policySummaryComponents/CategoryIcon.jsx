import React from 'react';
import { FiStar, FiBook, FiBarChart, FiMapPin, FiUserPlus } from 'react-icons/fi';
import { MdWork } from 'react-icons/md';
const iconMap = {
  '주요 공약': { icon: FiStar, color: 'text-yellow-500' },
  '정치・개헌': { icon: FiBook, color: 'text-purple-500' },
  '경제・AI': { icon: FiBarChart, color: 'text-green-500' },
  지역균형발전: { icon: FiMapPin, color: 'text-blue-500' },
  '청년・주거・일자리': { icon: FiUserPlus, color: 'text-orange-500' },
  '노동・복지': { icon: MdWork, color: 'text-red-500' },
};

const CategoryIcon = ({ category }) => {
  const IconComponent = iconMap[category]?.icon;
  const colorClass = iconMap[category]?.color || 'text-gray-400';

  return IconComponent ? (
    <span className={`text-2xl mr-2 ${colorClass}`}>
      <IconComponent />
    </span>
  ) : null;
};

export default CategoryIcon;
