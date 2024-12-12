import React from 'react';
import { ArrayDiffVisualizer } from './components/ArrayDiffVisualizer';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Array Diff Example
        </h1>
        <ArrayDiffVisualizer />
      </div>
    </div>
  );
}

export default App;