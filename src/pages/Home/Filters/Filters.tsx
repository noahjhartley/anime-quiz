import * as React from 'react';
import { useState, useEffect } from 'react';
import Genres from './Genres';
import Release from './Release';
import Studios from './Studios';
import Demographics from './Demographics';
import FilterConfig from '../../../utilities/FilterConfig/FilterConfig';
import defaultFilter from './DefaultFilter';

const Filters: React.FC<{ updateFilter: (newFilter: FilterConfig) => void }> = ({ updateFilter }) => {
    const [filter, setFilter] = useState(defaultFilter)

    const updateFilterRelease = (fromNumber: number, toNumber: number) => {
        setFilter((prevFilter) => ({
            ...prevFilter,
            aired: [fromNumber, toNumber],
          }));
    };

    const updateFilterGenres = (genres: string[]) => {
        setFilter((prevFilter) => ({
            ...prevFilter,
            genres: genres,
          }));
    }

    const updateFilterStudios = (studios: string[]) => {
        setFilter((prevFilter) => ({
            ...prevFilter,
            studio: studios,
          }));
    }

    const updateFilterDemographics = (demographics: string[]) => {
        setFilter((prevFilter) => ({
            ...prevFilter,
            demographic: demographics,
          }));
    }

    useEffect(() => {
        updateFilter(filter);
    }, [filter]);

    return(
        <div className="flex flex-col w-1/4 h-full mx-8 border-r-2 border-neutral-300">
            <h1 className="mt-5 text-center text-2xl mr-3">Filters</h1>
            <div className="w-4/5 mt-5 mr-3 border-b-2 border-neutral-300 self-center"></div>

            <div className="flex-1 flex-col overflow-auto" style={{ maxHeight: 'calc(100vh - 150px)' }}> 
                <Release updateRelease={updateFilterRelease}/>
                <div className="w-4/5 mt-8 border-b-2 border-neutral-300 mx-auto"></div>
                <Genres selectedGenres={filter.genres} updateGenres={updateFilterGenres}/>
                <div className="w-4/5 mt-5 border-b-2 border-neutral-300 mx-auto"></div>
                <Studios selectedStudios={filter.studio} updateStudios={updateFilterStudios}/>
                <div className="w-4/5 mt-5 border-b-2 border-neutral-300 mx-auto"></div>
                <Demographics selectedDemographics={filter.demographic} updateDemographics={updateFilterDemographics }/>
                <div className="w-4/5 mt-5 border-b-2 border-neutral-300 mx-auto"></div>
            </div>
        </div>
    )
}

export default Filters