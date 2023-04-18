import * as react from 'react';
import { useEffect, useState } from 'react';
import FilterConfig from '../../../utilities/FilterConfig/FilterConfig';
import AnimeListing from '../../../utilities/AnimeConfig/AnimeListings';
import YouTubePlayer from '../../../ui/YoutubePlayer';

const Categories: React.FC<{filter: FilterConfig}> = ({ filter }) => {
    const [filteredAnime, setFilteredAnime] = useState(AnimeListing)

    useEffect(() => {
        let temp = []
        for (let i = 0; i<AnimeListing.length; i++) {
            if (AnimeListing[i].aired[0] <= filter.aired[0] || AnimeListing[i].aired[0] >= filter.aired[1]) continue;
            else if (!AnimeListing[i].genre.some(item => filter.genres.includes(item))) continue;
            else if (!AnimeListing[i].studio.some(item => filter.studio.includes(item))) continue;
            else if (!AnimeListing[i].demographic.some(item => filter.demographic.includes(item))) continue;
            else temp.push(AnimeListing[i])
        }
        setFilteredAnime(temp)
    }, [filter])

    return(
        <div className="flex flex-col h-full w-1/4 mx-8">
            <h1 className="mt-5 text-center text-2xl">Categories</h1>
            <div className="w-4/5 mt-5 border-b-2 border-neutral-300 self-center"></div>

            <YouTubePlayer videoId='1dNkQoE76nY' start={0} stop={13}/>
        </div>

    )
}

export default Categories