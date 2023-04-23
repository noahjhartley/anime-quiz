import React, { useState, useEffect } from 'react';
import CheckboxList from '../../../ui/CheckboxList';

const studios = [
    'Aniplex',
    'Sunrise',
    'Discotek Media',
    'Production I.G.',
    'J.C. Staff',
    'Madhouse',
    'Studio Deen',
    'Pierrot',
    'A-1 Pictures',
    'Bandai Entertainment',
    'Shaft',
    'David Production',
    'Gainax',
    'LIDENFILMS',
    'Lerche',
    'Shin-Ei Animation',
    'ufotable',
    'Bones',
    'EggFirm'
]

const Studios: React.FC<{ selectedStudios: string[], updateStudios: (genres: string[]) => void }> = ({ selectedStudios, updateStudios }) => {

    const handleStudiosChange = (selectedStudios: string[]) => {
        updateStudios(selectedStudios)
    };

    function clearSelections() {
        handleStudiosChange([])
    }

    return (
        <div className="flex flex-col">
            <h2 className="text-xl text-center mt-5">Studio</h2>
            <CheckboxList options={studios} selectedValues={selectedStudios} onChange={handleStudiosChange} />
            <button onClick={clearSelections} className="w-3/4 mx-auto m-2 border border-gray-300 rounded-md px-4 py-2 text-black hover:bg-neutral-100">Clear Selections</button>
        </div>
    )
}

export default Studios