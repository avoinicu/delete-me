import { ItemType } from "../types";

export const compareItems = (a: ItemType, b: ItemType): boolean => {
  return a.id === b.id;
};
