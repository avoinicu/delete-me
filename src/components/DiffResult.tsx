import React from 'react';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import { DiffResultProps } from '../types';
import { DiffSection } from './DiffSection';

export const DiffResultView: React.FC<DiffResultProps> = ({ diffResult }) => {
  if (!diffResult) {
    return null;
  }

  const { removed = [], added = [], common = [] } = diffResult;

  return (
    <div className="space-y-2">
      <DiffSection
        items={removed}
        icon={<Minus size={20} />}
        label="Removed"
        colorClass="text-red-600"
      />
      <DiffSection
        items={added}
        icon={<Plus size={20} />}
        label="Added"
        colorClass="text-green-600"
      />
      <DiffSection
        items={common}
        icon={<ArrowRight size={20} />}
        label="Common"
        colorClass="text-blue-600"
      />
    </div>
  );
};