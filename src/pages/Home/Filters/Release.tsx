import React, { useState } from 'react';
import NumberDropdown from '../../../ui/NumberDropdown';

const Release: React.FC<{ updateRelease: (fromNumber: number, toNumber: number) => void }> = ({ updateRelease }) => {
  const [fromNumber, setFromNumber] = useState<number>(1900);
  const [toNumber, setToNumber] = useState<number>(2023);

  const handleFromNumberChange = (selectedNumber: number) => {
    setFromNumber(selectedNumber);
    updateRelease(selectedNumber, toNumber); // Call the callback function with updated values
  };

  const handleToNumberChange = (selectedNumber: number) => {
    setToNumber(selectedNumber);
    updateRelease(fromNumber, selectedNumber); // Call the callback function with updated values
  };

  return (
    <div>
        <h2 className="text-xl text-center mt-5">Release Date</h2>
        <div className="flex mt-3 space-x-2 justify-center">
            <div>
                <label htmlFor="fromNumber" className="mr-2">From:</label>
                <NumberDropdown number1={1900} number2={toNumber} defaultSelectedNumber={1900} onSelectNumber={handleFromNumberChange} />
            </div>
            <div>
                <label htmlFor="toNumber" className="mr-2">To:</label>
                <NumberDropdown number1={fromNumber} number2={2023} defaultSelectedNumber={2023} onSelectNumber={handleToNumberChange} />
            </div>
        </div>
    </div>
  );
};

export default Release;
