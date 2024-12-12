import React from 'react';

interface ArrayInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const ArrayInput: React.FC<ArrayInputProps> = ({ label, value, onChange }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Enter comma-separated values"
      />
    </div>
  );
}

export default ArrayInput;