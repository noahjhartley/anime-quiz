import React, { useState, useEffect } from 'react';
import CheckboxList from '../../../ui/CheckboxList';

const demographics = [
    'Josei',
    'Kids',
    'Seinen',
    'Shoujo',
    'Shounen'
  ];

  const Demographics: React.FC<{ selectedDemographics: string[], updateDemographics: (demographics: string[]) => void }> = ({ selectedDemographics, updateDemographics }) => {

    const handleDemographicsChange = (selectedDemographics: string[]) => {
        updateDemographics(selectedDemographics)
    };

    function clearSelections() {
        handleDemographicsChange([])
    }

    return (
        <div className="flex flex-col">
            <h2 className="text-xl text-center mt-5">Demographics</h2>
            <CheckboxList options={demographics} selectedValues={selectedDemographics} onChange={handleDemographicsChange} />
            <button onClick={clearSelections} className="w-3/4 mx-auto m-2 border border-gray-300 rounded-md px-4 py-2 text-black hover:bg-neutral-100">Clear Selections</button>
        </div>
    )
}

export default Demographics