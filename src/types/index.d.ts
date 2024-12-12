import type { DiffResult } from "fast-array-diff";
import type { ReactNode } from "react";

export interface LabelTranslation {
  locale: string;
  text: string;
}

export interface ItemType {
  id: number;
  isArchived: boolean;
  labelTranslations: LabelTranslation[];
}

export interface DiffVisualizerProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

export interface ArrayVisualizerProps {
  array: ItemType[];
  diffResult: DiffResult<ItemType> | null;
  type: "source" | "target";
}

export interface DiffResultProps {
  diffResult: DiffResult<ItemType> | null;
}

export interface DiffSectionProps {
  items: ItemType[];
  icon: ReactNode;
  label: string;
  colorClass: string;
}
