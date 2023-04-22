import React, { useRef, useState, useEffect } from "react";
import YouTube from "react-youtube";

declare global {
    interface Window {
        YT: any;
    }
}

interface Props {
  videoId: string;
  start?: number;
  stop?: number;
}

const YouTubePlayer: React.FC<Props> = ({ videoId, start, stop }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef<any>(null);

  const togglePlaying = () => {
    if (playerRef.current) {
      if (isPlaying) {
        playerRef.current.pauseVideo();
      } else {
        playerRef.current.playVideo();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const onReady = (event: any) => {
    playerRef.current = event.target;
    playerRef.current.pauseVideo();
  };

  function onStateChange(event: any) {
    if (Math.floor(playerRef.current.getCurrentTime()) === stop) {
        playerRef.current.seekTo(start);
        togglePlaying();
    }
  };

  const options = {
    playerVars: {
      autoplay: 0,
      start: start ? start : undefined,
      end: stop ? stop : undefined,
    },
  };

  useEffect(() =>{
    //setIsPlaying(false)
  })

  return (
    <div>
      <YouTube videoId={videoId} opts={options} onReady={onReady} onStateChange={onStateChange} className="hidden"/>
      <button
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-900 text-white rounded-full p-2 shadow-md focus:outline-none"
        onClick={togglePlaying}
      >
        {isPlaying ? "Pause" : "Play"}
      </button>
    </div>
  );
};

export default YouTubePlayer;
