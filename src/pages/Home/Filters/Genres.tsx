import React, { useState, useEffect } from 'react';
import CheckboxList from '../../../ui/CheckboxList';

const genres = [
    'Action',
    'Adventure',
    'Avant Garde',
    'Award Winning',
    'Comedy',
    'Drama',
    'Fantasy',
    'Gourmet',
    'Horror',
    'Mystery',
    'Romance',
    'Sci-Fi',
    'Slice of Life',
    'Sports',
    'Supernatural',
    'Suspense',
  ];

const Genres: React.FC<{ selectedGenres: string[], updateGenres: (genres: string[]) => void }> = ({ selectedGenres, updateGenres }) => {

    const handleGenresChange = (selectedGenres: string[]) => {
        updateGenres(selectedGenres)
    };

    function clearSelections() {
        handleGenresChange([])
    }

    return (
        <div className="flex flex-col">
            <h2 className="text-xl text-center mt-5">Genres</h2>
            <CheckboxList options={genres} selectedValues={selectedGenres} onChange={handleGenresChange} />
            <button onClick={clearSelections} className="w-3/4 mx-auto m-2 border border-gray-300 rounded-md px-4 py-2 text-black hover:bg-neutral-100">Clear Selections</button>
        </div>
    )
}

export default Genres