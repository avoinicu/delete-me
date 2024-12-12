import React from 'react';
import { DiffSectionProps } from '../types';

export const DiffSection: React.FC<DiffSectionProps> = ({
  items,
  icon,
  label,
  colorClass
}) => {
  if (items.length === 0) {
    return null;
  }

  return (
    <div className={`flex items-center space-x-2 ${colorClass}`}>
      {icon}
      <span>
        {label}: [{items.map(item => item.name).join(', ')}]
      </span>
    </div>
  );
};