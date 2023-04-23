import { Navigate, useLocation } from 'react-router-dom';
import YouTubePlayer from '../../ui/YoutubePlayer';
import React, { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import AnimeConfig from '../../utilities/AnimeConfig/AnimeConfig';
import Opening from '../../utilities/AnimeConfig/Opening';
import { useNavigate } from 'react-router-dom'

interface QuizState {
  type: string;
  animeList: AnimeConfig[];
}

export default function OpeningQuiz() {
    const location = useLocation();
    const navigate = useNavigate()
    const { type, animeList } = location.state as QuizState;

    function randomIntFromInterval(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(0);

    function setStartEnd() {
        switch (type) {
        case "0":
            setStart(0);
            setEnd(15);
            break;
        case "1":
            setStart(currentAnime.ops[currentOpIndex].chorusStart - 15);
            setEnd(currentAnime.ops[currentOpIndex].chorusStart);
            break;
        case "2":
            setStart(currentAnime.ops[currentOpIndex].chorusStart);
            setEnd(currentAnime.ops[currentOpIndex].chorusEnd);
            break;
        case "3":
            setStart(currentAnime.ops[currentOpIndex].videoLength - 15);
            setEnd(currentAnime.ops[currentOpIndex].videoLength);
            break;
        case "4":
            let rnd = randomIntFromInterval(0, animeList[0].ops[2].videoLength - 15);
            setStart(rnd);
            setEnd(rnd + 15);
            break;
        }
    }

    const [currentAnime, setCurrentAnime] = useState<AnimeConfig>(new AnimeConfig())
    const [currentOpIndex, setCurrentOpIndex] = useState<number>(0)
    const [currentOp, setCurrentOp] = useState<Opening>(new Opening())
    const [userAnswer, setUserAnswer] = useState<string>("")
    const [playedOps, setPlayedOps] = useState<boolean[][]>([[]])
    const [numCorrect, setNumCorrect] = useState<number>(0)

    const nextOp = () => {
        
    }

    
  
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold mb-8">Quiz Page</h1>
        <div className="bg-white shadow-md rounded-lg p-8 w-96">
            <YouTubePlayer videoId={currentOp.url} start={start} stop={end} />

            <form>
                <label htmlFor="answerInput" className="sr-only">
                    Answer
                </label>
                <input
                    type="text"
                    id="answerInput"
                    placeholder="Type your answer here"
                    className="w-full border-gray-300 rounded-md px-4 py-2 mb-4"
                    value={userAnswer}
                    onChange={() => setUserAnswer(userAnswer)}
                    autoComplete="off"
                />
                <button type="button" className="bg-gray-300 text-gray-700 rounded-md px-4 py-2 hover:bg-gray-400" onClick={nextOp}>
                    Skip
                </button>
            </form>
            <p className="text-gray-500 text-sm mt-4">{numCorrect} correct answers so far.</p>
        </div>
        </div>
    );
}
  
