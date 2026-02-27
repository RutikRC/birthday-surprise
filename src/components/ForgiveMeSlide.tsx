import { useState, useCallback, useRef, useEffect } from 'react';
import confetti from 'canvas-confetti';
import dogImg from '../assets/dog.jpg';
import './ForgiveMeSlide.css';

type Props = {
  onYes: () => void;
};

export default function ForgiveMeSlide({ onYes }: Props) {
  const [forgiven, setForgiven] = useState(false);
  const [noClicked, setNoClicked] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [noPos, setNoPos] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowHint(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  const handleYes = useCallback(() => {
    setForgiven(true);
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#ffb6c1', '#e6e6fa', '#ffd700', '#dda0dd'],
    });
    setTimeout(() => {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.5, x: 0.3 },
        colors: ['#ffb6c1', '#e6e6fa', '#ffd700', '#dda0dd'],
      });
    }, 200);
    setTimeout(onYes, 1500);
  }, [onYes]);

  const moveNoButton = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const padding = 60;
    const maxX = rect.width - padding;
    const maxY = rect.height - padding;
    const newX = padding + Math.random() * (maxX - padding);
    const newY = padding + Math.random() * (maxY - padding);
    setNoPos({ x: (newX / rect.width) * 100, y: (newY / rect.height) * 100 });
  }, []);

  const handleNoHover = useCallback(() => {
    moveNoButton();
  }, [moveNoButton]);

  const handleNoClick = useCallback(() => {
    setNoClicked(true);
    moveNoButton();
  }, [moveNoButton]);

  if (forgiven) {
    return (
      <div className="forgive-slide forgive-slide--done">
        <p className="forgive-done-text">Thank you, Karishma 💜😊 You're the best.</p>
      </div>
    );
  }

  return (
    <div className="forgive-slide">
      <h2 className="forgive-title">Forgive me?</h2>

      <div className="forgive-hints">
        <p className={`forgive-hint ${!showHint && !noClicked ? 'forgive-hint--visible' : ''}`}>
          Try clicking No and see what happens 👀
        </p>
        <p className={`forgive-hint ${showHint && !noClicked ? 'forgive-hint--visible' : ''}`}>
          No was never an option, kind lady 😌
        </p>
        <p className={`forgive-hint ${noClicked ? 'forgive-hint--visible' : ''}`}>
          Told you 😏 No was never an option... just click Yes already!
        </p>
      </div>

      <div className={`forgive-dog ${showHint || noClicked ? 'forgive-dog--visible' : ''}`}>
        <img src={dogImg} alt="cute dog smiling with flowers" className="forgive-dog-img" />
      </div>

      <div ref={containerRef} className="forgive-buttons">
        <button
          type="button"
          className="forgive-btn forgive-btn--yes"
          onClick={handleYes}
        >
          Yes 💕
        </button>
        <button
          type="button"
          className="forgive-btn forgive-btn--no"
          onMouseEnter={handleNoHover}
          onTouchStart={handleNoHover}
          onClick={handleNoClick}
          style={
            noPos
              ? {
                  left: `${noPos.x}%`,
                  top: `${noPos.y}%`,
                  transform: 'translate(-50%, -50%)',
                }
              : undefined
          }
        >
          No
        </button>
      </div>
    </div>
  );
}
