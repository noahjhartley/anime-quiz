import { useLocation } from 'react-router-dom';
import YouTubePlayer from '../../ui/YoutubePlayer';
import React, { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import AnimeConfig from '../../utilities/AnimeConfig/AnimeConfig';

export default function OpeningQuiz() {
    const location = useLocation();
    const type = location.state?.type;
    const animeList = location.state?.animeList;

    function randomIntFromInterval(min: number, max: number) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const [start, setStart] = useState(0)
    const [end, setEnd] = useState(0)

    function setStartEnd() {
        switch (type) {
            case "0":
                setStart(0)
                setEnd(15)
                break;
            case "1":
                setStart(currentAnime.ops[currentOpIndex].chorusStart - 15)
                setEnd(currentAnime.ops[currentOpIndex].chorusStart)
                break;
            case "2": 
                setStart(currentAnime.ops[currentOpIndex].chorusStart)
                setEnd(currentAnime.ops[currentOpIndex].chorusEnd)
                break;
            case "3":
                setStart(currentAnime.ops[currentOpIndex].videoLength - 15)
                setEnd(currentAnime.ops[currentOpIndex].videoLength)
                break;
            case "4":
                let rnd = randomIntFromInterval(0, animeList[0].ops[2].videoLength - 15)
                setStart(rnd)
                setEnd(rnd + 15)
                break;
        }
    }

    const [currentIndex, setCurrentIndex] = useState<number>(randomIntFromInterval(0, animeList.length-1));
    const [userAnswer, setUserAnswer] = useState<string>('');
    const [numCorrect, setNumCorrect] = useState<number>(0);
    const [showCorrectAnswer, setShowCorrectAnswer] = useState<boolean>(false);
    const [currentAnime, setCurrentAnime] = useState<AnimeConfig>(animeList[currentIndex])
    const [currentOpIndex, setCurrentOpIndex] = useState<number>(randomIntFromInterval(0, currentAnime.ops.length-1));

    const handleAnswerSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (currentAnime.title.some(item => userAnswer.includes(item))) {
            setNumCorrect(numCorrect + 1);
            setCurrentIndex(randomIntFromInterval(0, animeList.length-1));
            setCurrentAnime(animeList[currentIndex])
            setCurrentOpIndex(randomIntFromInterval(0, currentAnime.ops.length-1))
            setStartEnd()
            setUserAnswer('');
            setShowCorrectAnswer(false);
        } else {
            setShowCorrectAnswer(true);
        }
    };

    const handleSkipClick = () => {
        setCurrentIndex(randomIntFromInterval(0, animeList.length-1));
        setCurrentAnime(animeList[currentIndex])
        setCurrentOpIndex(randomIntFromInterval(0, currentAnime.ops.length-1))
        setStartEnd()
        setUserAnswer('');
        setShowCorrectAnswer(false);
    };

    useEffect(() => {
        setStartEnd()
    })

    useEffect(() => {
        if (currentAnime.title.some(item => userAnswer.toLowerCase().includes(item.toLowerCase()))) {
            setNumCorrect(numCorrect + 1);
            setCurrentIndex(randomIntFromInterval(0, animeList.length-1));
            setCurrentAnime(animeList[currentIndex])
            setCurrentOpIndex(randomIntFromInterval(0, currentAnime.ops.length-1))
            setStartEnd()
            setUserAnswer('');
            setShowCorrectAnswer(false);
        }
    }, [userAnswer])

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold mb-8">Quiz Page</h1>
            <div className="bg-white shadow-md rounded-lg p-8 w-96">
                <YouTubePlayer videoId={currentAnime.ops[currentOpIndex].url} start={start} stop={end} />
                <form onSubmit={handleAnswerSubmit}>
                <label htmlFor="answerInput" className="sr-only">
                    Answer
                </label>
                <input
                    type="text"
                    id="answerInput"
                    placeholder="Type your answer here"
                    className="w-full border-gray-300 rounded-md px-4 py-2 mb-4"
                    value={userAnswer}
                    onChange={(event) => setUserAnswer(event.target.value)}
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white rounded-md px-4 py-2 mr-2 hover:bg-blue-600"
                >
                    Submit
                </button>
                <button
                    type="button"
                    className="bg-gray-300 text-gray-700 rounded-md px-4 py-2 hover:bg-gray-400"
                    onClick={handleSkipClick}
                >
                    Skip
                </button>
                </form>
                <Transition
                    show={showCorrectAnswer}
                    enter="transition-opacity duration-200"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <p className="text-red-500 mt-2">Incorrect answer. The correct answer is "{currentAnime.title}".</p>
                </Transition>
                <p className="text-gray-500 text-sm mt-4">{numCorrect} correct answers so far.</p>
            </div>
        </div>
      );
  }
  