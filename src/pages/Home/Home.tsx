import * as React from 'react';
import { useState, useEffect } from 'react';
import Categories from './Categories/Categories';
import Filters from './Filters/Filters';
import FilterConfig from '../../utilities/FilterConfig/FilterConfig';

export default function Home() {
    const [filter, setFilter] = useState(new FilterConfig)

    const updateFilter = (newFilter: FilterConfig) => {
        setFilter(newFilter);
    }

    return(
        <div className="flex w-full h-full">
            <Filters updateFilter={updateFilter}/>
            <Categories filter={filter}/>
        </div>
    )
}