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

    const [start, setStart] = useState(0); //video start point
    const [end, setEnd] = useState(0); //video end point
    const [currentAnime, setCurrentAnime] = useState<AnimeConfig>(new AnimeConfig()) //the currently loaded anime
    const [currentAnimeIndex, setCurrentAnimeIndex] = useState<number>(0) //the index of animeList that decides currentAnime
    const [currentOp, setCurrentOp] = useState<Opening>(new Opening()) //the currently loaded opening from the currently loaded anime
    const [currentOpIndex, setCurrentOpIndex] = useState<number>(0) //the index of currentAnime.ops that decides currentOp
    const [userAnswer, setUserAnswer] = useState<string>("") //user answer from text box
    const [numCorrect, setNumCorrect] = useState<number>(0) //number of correct answers
    const [played, setPlayed] = useState<boolean[][]>([[]]) //2d boolean array, for played[i][j], set the length of i = animeList.length and the length of each j to animeList[i].ops.length

    function randomIntFromInterval(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    function setDuration() {
        switch (type) {
        case "0":
            setStart(0);
            setEnd(15);
            break;
        case "1":
            setStart(currentOp.chorusStart - 15);
            setEnd(currentOp.chorusStart);
            break;
        case "2":
            setStart(currentOp.chorusStart);
            setEnd(currentOp.chorusEnd);
            break;
        case "3":
            setStart(currentOp.videoLength - 15);
            setEnd(currentOp.videoLength);
            break;
        case "4":
            let rnd = randomIntFromInterval(0, currentOp.videoLength - 15);
            setStart(rnd);
            setEnd(rnd + 15);
            break;
        }
    }

    const nextAnime = () => {
        //Assign new currentAnimeIndex use randomIntFromInterval(0, animeList.length-1)
        //Assign new anime using animeList[currentAnimeIndex]
        //call nextOp to assign a new op
    }

    const nextOp = () => {
        //Assign new currentOpIndex using randomIntFromInterval(0, currentAnime.ops.length-1)
        //Assign new opening using currentAnime.ops[randomIntFromInterval]
        //If the selected opening has already been used (played[currentAnimeIndex][currentOpeningIndex] === true), assign a new opening until one that hasn't been used is found
        //Call setDuration to set a new duration
    }

    const handleSkip = () => {
        //set the current opening to played
        //Call nextAnime to assign a new anime
    }

    useEffect(() => {
        if (currentAnime.title.some(item => userAnswer.includes(item))) {
            setNumCorrect(numCorrect + 1)
            nextAnime()
        }
    }, [userAnswer])
  
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
                <button type="button" className="bg-gray-300 text-gray-700 rounded-md px-4 py-2 hover:bg-gray-400" onClick={handleSkip}>
                    Skip
                </button>
            </form>
            <p className="text-gray-500 text-sm mt-4">{numCorrect} correct answers so far.</p>
        </div>
        </div>
    );
}
  
