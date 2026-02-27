import { useRef, useState } from 'react';
import './MusicToggle.css';

const MUSIC_SRC = '/music.mp3'; // Optional: add a soft instrumental file to public folder

export default function MusicToggle() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggle = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={MUSIC_SRC}
        loop
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
      <button
        type="button"
        className="music-toggle"
        onClick={toggle}
        title={isPlaying ? 'Pause music' : 'Play music'}
        aria-label={isPlaying ? 'Pause background music' : 'Play background music'}
      >
        {isPlaying ? '🔊' : '🔇'}
      </button>
    </>
  );
}
