import React, { useState, useEffect } from 'react';

type Props = {
  number1: number;
  number2: number;
  defaultSelectedNumber: number;
  onSelectNumber: (selectedNumber: number) => void;
};

const NumberDropdown: React.FC<Props> = ({ number1, number2, defaultSelectedNumber, onSelectNumber }) => {
  const [selectedNumber, setSelectedNumber] = useState<number>(defaultSelectedNumber);

  useEffect(() => {
    setSelectedNumber(defaultSelectedNumber);
  }, [defaultSelectedNumber]);

  const handleNumberChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newNumber = parseInt(event.target.value);
    setSelectedNumber(newNumber);
    onSelectNumber(newNumber); // Call the onSelectNumber callback with the selected number
  };

  return (
    <select value={selectedNumber} onChange={handleNumberChange} className="border-2 border-neutral-400 rounded-md h-9 w-20">
      {Array.from({ length: number2 - number1 + 1 }, (_, index) => number2 - index).map((num) => (
        <option key={num} value={num}>
          {num}
        </option>
      ))}
    </select>
  );
};

export default NumberDropdown;
