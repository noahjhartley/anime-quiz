import * as react from 'react';
import { useEffect, useState } from 'react';
import FilterConfig from '../../../utilities/FilterConfig/FilterConfig';
import AnimeListing from '../../../utilities/AnimeConfig/AnimeListings';
import YouTubePlayer from '../../../ui/YoutubePlayer';
import QuizButton from '../../../ui/QuizButton';

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
        <div className="flex flex-col h-full w-full mx-8">
            <h1 className="mt-5 text-center text-2xl">Categories</h1>
            <div className="w-4/5 mt-5 border-b-2 border-neutral-300 self-center"></div>

            <div className="flex flex-row mt-12 justify-around">
                <QuizButton 
                    buttonText='Openings' 
                    menuOptions={[
                        {label: "Beginning", value: "0"}, 
                        {label: "Pre-Chorus", value: "1"},
                        {label: "Chorus", value: "2"}, 
                        {label: "End", value: "3"},
                        {label: "Random", value: "4"}
                    ]} 
                    linkButtonLabel='Start Quiz' 
                    linkButtonUrl='/OpeningQuiz' 
                    animeList={filteredAnime}
                />
                <QuizButton 
                    buttonText='Endings' 
                    menuOptions={[
                        {label: "Beginning", value: "0"}, 
                        {label: "Pre-Chorus", value: "1"},
                        {label: "Chorus", value: "2"}, 
                        {label: "End", value: "3"},
                        {label: "Random", value: "4"}
                    ]} 
                    linkButtonLabel='Start Quiz' 
                    linkButtonUrl='' 
                    animeList={filteredAnime}
                />
                <QuizButton 
                    buttonText='Lyrics' 
                    menuOptions={[
                        {label: "Beginning", value: "0"}, 
                        {label: "Pre-Chorus", value: "1"},
                        {label: "Chorus", value: "2"}, 
                        {label: "End", value: "3"},
                        {label: "Random", value: "4"}
                    ]} 
                    linkButtonLabel='Start Quiz' 
                    linkButtonUrl='' 
                    animeList={filteredAnime}
                />
                <QuizButton 
                    buttonText='Translated Lyrics' 
                    menuOptions={[
                        {label: "Beginning", value: "0"}, 
                        {label: "Pre-Chorus", value: "1"},
                        {label: "Chorus", value: "2"}, 
                        {label: "End", value: "3"},
                        {label: "Random", value: "4"}
                    ]} 
                    linkButtonLabel='Start Quiz' 
                    linkButtonUrl='' 
                    animeList={filteredAnime}
                />
            </div>
        </div>

    )
}

export default Categories

{/* <div className="w-full">
    <YouTubePlayer videoId={filteredAnime[0].ops[2].url} start={filteredAnime[0].ops[2].chorusStart} stop={filteredAnime[0].ops[2].chorusEnd}/>
    <div>{filteredAnime[0].ops[1].title}</div>
    
    <div>{filteredAnime[0].ops[1].artist}</div>
    
    <div>{filteredAnime[0].ops[1].lyrics[0].split('\n').map(str => <p>{str}</p>)}</div>
    
    <div>{filteredAnime[0].ops[1].englishLyrics[0].split('\n').map(str => <p>{str}</p>)}</div>
</div> */}