import { useEffect, useState } from "react";

interface Props {
  videoId: string;
  startSeconds: number;
  endSeconds: number;
}

const AudioPlayer: React.FC<Props> = ({ videoId, startSeconds, endSeconds }) => {
  const [audioUrl, setAudioUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchAudioUrl = async () => {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=contentDetails&key=AIzaSyDw2pUTx9JvHr4fkor0wbnuATyZ1J8X4a4`
      );
      const json = await response.json();
      const duration = json.items[0].contentDetails.duration;
      const durationSeconds = convertDurationToSeconds(duration);
      const adjustedStartSeconds = Math.min(startSeconds, durationSeconds - 1);
      const adjustedEndSeconds = Math.min(endSeconds, durationSeconds);
      const response2 = await fetch(
        `https://www.youtube.com/watch?v=${videoId}&t=${adjustedStartSeconds}s`
      );
      const html = await response2.text();
      const regex = /"adaptiveFormats":(\[.+?\])/;
      const match = html.match(regex);
      if (match) {
        const adaptiveFormats = JSON.parse(match[1]);
        const audioFormat = adaptiveFormats.find((format: any) => format.mimeType.startsWith("audio/"));
        if (audioFormat) {
          setAudioUrl(audioFormat.url);
        }
      }
    };
    fetchAudioUrl();
  }, [videoId, startSeconds, endSeconds]);

  const convertDurationToSeconds = (duration: string) => {
    const regex = /PT(\d+H)?(\d+M)?(\d+S)?/;
    const match = duration.match(regex);
    let hours = 0,
      minutes = 0,
      seconds = 0;
    if (match) {
      if (match[1]) {
        hours = parseInt(match[1].replace("H", ""));
      }
      if (match[2]) {
        minutes = parseInt(match[2].replace("M", ""));
      }
      if (match[3]) {
        seconds = parseInt(match[3].replace("S", ""));
      }
    }
    return hours * 3600 + minutes * 60 + seconds;
  };

  return (
    <>
      {audioUrl && (
        <audio controls>
          <source src={audioUrl} type="audio/mpeg" />
        </audio>
      )}
    </>
  );
};

export default AudioPlayer;
