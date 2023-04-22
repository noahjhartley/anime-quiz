import { useLocation } from 'react-router-dom';
import YouTubePlayer from '../../ui/YoutubePlayer';

export default function OpeningQuiz() {
    const location = useLocation();
    const type = location.state?.type;
    const animeList = location.state?.animeList;
    let start = 0;
    let end = 0

    function randomIntFromInterval(min: number, max: number) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    switch (type) {
        case "0":
            start = 0
            end = 10
            break;
        case "1":
            start = animeList[0].ops[0].chorusStart - 10
            end = animeList[0].ops[0].chorusStart
            break;
        case "2": 
            start = animeList[0].ops[0].chorusStart
            end = animeList[0].ops[0].chorusEnd
            break;
        case "3":
            start = animeList[0].ops[0].videoLength - 10
            end = animeList[0].ops[0].videoLength
            break;
        case "4":
            let rnd = randomIntFromInterval(0, animeList[0].ops[2].videoLength - 10)
            start = rnd
            end = start + 10
            break;
    }
  
    return (
      <div className="">
        <YouTubePlayer videoId={animeList[0].ops[0].url} start={start} stop={end}/>
      </div>
    );
  }
  