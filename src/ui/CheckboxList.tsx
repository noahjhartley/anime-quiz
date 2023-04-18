import React, { useState, useEffect } from 'react';

interface CheckboxListProps {
  options: string[];
  selectedValues: string[];
  onChange: (selectedValues: string[]) => void;
}

const CheckboxList: React.FC<CheckboxListProps> = ({ options, selectedValues, onChange }) => {
  const [checkedValues, setCheckedValues] = useState<string[]>(selectedValues);

  useEffect(() => {
    setCheckedValues(selectedValues);
  }, [selectedValues]);

  const handleButtonClick = (value: string) => {
    const updatedValues = checkedValues.includes(value)
      ? checkedValues.filter((val) => val !== value)
      : [...checkedValues, value];

    setCheckedValues(updatedValues);
    onChange(updatedValues);
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap mt-3 justify-center">
        {options.map((option) => (
          <button
            key={option}
            className={`m-2 border border-gray-300 rounded-md px-4 py-2 ${
              checkedValues.includes(option) ? 'bg-bgblue text-white' : ''
            }`}
            onClick={() => handleButtonClick(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CheckboxList;

