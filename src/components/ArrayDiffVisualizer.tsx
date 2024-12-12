import React, { useMemo } from "react";
import { diff } from "fast-array-diff";
import { compareItems } from "../utils/arrayUtils";

import { ArrayVisualizer } from "./ArrayVisualizer";
import type { ItemType } from "../types";
import { ARRAY_1, ARRAY_2 } from "../constants/data";

export const ArrayDiffVisualizer: React.FC = () => {
  const { arr1, arr2, diffResult } = useMemo((): {
    arr1: ItemType[];
    arr2: ItemType[];
    diffResult: ReturnType<typeof diff>;
  } => {
    const compareFunction = (a: ItemType, b: ItemType) => compareItems(a, b);

    return {
      arr1: ARRAY_1,
      arr2: ARRAY_2,
      diffResult: diff(ARRAY_1, ARRAY_2, compareFunction),
    };
  }, []);

  return (
    <div className="w-full max-w-2xl p-6 mx-auto space-y-6 bg-white rounded-lg shadow-lg">
      <h2 className="mb-6 text-2xl font-bold text-gray-800">
        Object Array Diff Visualizer
      </h2>

      {!diffResult ? (
        <p className="text-red-600">
          Please enter valid comma-separated values
        </p>
      ) : (
        <div className="mt-8 space-y-4">
          <h3 className="text-xl font-semibold text-gray-700">Diff Results</h3>

          <div className="p-4 mt-6 rounded-lg bg-gray-50">
            <div className="flex gap-2">
              <div>
                <p className="mb-2 text-sm font-medium text-gray-600">
                  First Array:
                </p>
                <ArrayVisualizer
                  array={arr1}
                  diffResult={diffResult}
                  type="source"
                />
              </div>
              <div>
                <p className="mb-2 text-sm font-medium text-gray-600">
                  Second Array:
                </p>
                <ArrayVisualizer
                  array={arr2}
                  diffResult={diffResult}
                  type="target"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
