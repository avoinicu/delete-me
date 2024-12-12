import React from 'react';
import { ArrayVisualizerProps } from '../types';
import { getItemClass } from '../utils/styleUtils';

export const ArrayVisualizer: React.FC<ArrayVisualizerProps> = ({ array, diffResult, type }) => {
  if (!diffResult) {
    return null;
  }

  return (
    <div className="flex flex-col gap-2">
      {array.map((item) => (
        <div
          key={item.id}
          className={`px-3 py-1 rounded-full text-sm ${getItemClass(item, type, diffResult)}`}
        >
          {item.labelTranslations[0].text}
        </div>
      ))}
    </div>
  );
};