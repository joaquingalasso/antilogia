import * as React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { formatTime } from '../utils/helpers';

const { useRef, useState } = React;

interface CustomAudioPlayerProps {
  src: string;
  title: string;
  caption?: string;
}

export const CustomAudioPlayer = ({ src, title, caption }: CustomAudioPlayerProps) => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const { t } = useLanguage();

    const togglePlayPause = () => {
        if (isPlaying) {
            audioRef.current?.pause();
        } else {
            audioRef.current?.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleTimeUpdate = () => {
        setCurrentTime(audioRef.current?.currentTime || 0);
    };

    const handleLoadedMetadata = () => {
        setDuration(audioRef.current?.duration || 0);
    };

    const handleSeek = (event: React.MouseEvent<HTMLDivElement>) => {
        if (!audioRef.current) return;
        const progressBar = event.currentTarget;
        const rect = progressBar.getBoundingClientRect();
        const offsetX = event.clientX - rect.left;
        const newTime = (offsetX / rect.width) * duration;
        audioRef.current.currentTime = newTime;
        setCurrentTime(newTime);
    };

    const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

    const playerElement = (
        <div className="custom-audio-player-container">
            <audio
                ref={audioRef}
                src={src}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onEnded={() => setIsPlaying(false)}
                hidden
            />
            <button onClick={togglePlayPause} className="play-pause-button" aria-label={isPlaying ? t('pause') : t('play')}>
                {isPlaying ? '❚❚' : '▶'}
            </button>
            <div className="audio-timeline">
                <div className="progress-bar-container" onClick={handleSeek}>
                    <div className="progress-bar" style={{ width: `${progress}%` }} />
                </div>
                <div className="time-display">
                    <span>{formatTime(currentTime)}</span> / <span>{formatTime(duration)}</span>
                </div>
            </div>
        </div>
    );

    return (
        <figure className="content-figure audio-figure" aria-label={`${t('audioPlayerFor')} ${title}`}>
            {playerElement}
            {caption && <figcaption>{caption}</figcaption>}
        </figure>
    );
};