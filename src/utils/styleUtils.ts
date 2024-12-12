import type { DiffResult } from 'fast-array-diff';
import { ItemType } from '../types';
import { compareItems } from './arrayUtils';

export const getItemClass = (
  item: ItemType,
  type: 'source' | 'target',
  diffResult: DiffResult<ItemType>
): string => {
  const { removed = [], added = [], common = [] } = diffResult;

  if (type === 'source' && removed.some(r => compareItems(r, item))) {
    return 'bg-red-100 text-red-700';
  }
  if (type === 'target' && added.some(a => compareItems(a, item))) {
    return 'bg-green-100 text-green-700';
  }
  if (common.some(c => compareItems(c, item))) {
    return 'bg-blue-100 text-blue-700';
  }
  return 'bg-gray-100 text-gray-700';
};