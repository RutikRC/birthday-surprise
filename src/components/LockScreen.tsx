import { useEffect, useState } from 'react';
import type { useDateLock } from '../useDateLock';
import './LockScreen.css';

type TimeLeft = ReturnType<typeof useDateLock>['timeLeft'];

type Props = { timeLeft: TimeLeft };

function LockIcon() {
  return (
    <svg className="lock-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function FloatingHeart() {
  const [style, setStyle] = useState({ left: '0%', animationDelay: '0s' });
  useEffect(() => {
    setStyle({
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
    });
  }, []);
  return <span className="floating-heart" style={style}>♥</span>;
}

export default function LockScreen({ timeLeft }: Props) {
  const pads = (n: number) => String(n).padStart(2, '0');

  return (
    <div className="lock-screen">
      <div className="lock-bg">
        <div className="lock-stars" />
        <div className="lock-gradient" />
      </div>

      <div className="lock-hearts">
        {Array.from({ length: 12 }).map((_, i) => (
          <FloatingHeart key={i} />
        ))}
      </div>

      <div className="lock-card glass">
        <LockIcon />
        <p className="lock-message">
          Something important is waiting for you, Karishma 💜😊<br />
          It unlocks on March 5 ✨
        </p>
        <div className="lock-countdown">
          <div className="countdown-block">
            <span className="countdown-value">{pads(timeLeft.days)}</span>
            <span className="countdown-label">Days</span>
          </div>
          <span className="countdown-sep">:</span>
          <div className="countdown-block">
            <span className="countdown-value">{pads(timeLeft.hours)}</span>
            <span className="countdown-label">Hours</span>
          </div>
          <span className="countdown-sep">:</span>
          <div className="countdown-block">
            <span className="countdown-value">{pads(timeLeft.minutes)}</span>
            <span className="countdown-label">Min</span>
          </div>
          <span className="countdown-sep">:</span>
          <div className="countdown-block">
            <span className="countdown-value">{pads(timeLeft.seconds)}</span>
            <span className="countdown-label">Sec</span>
          </div>
        </div>
        <p className="lock-subtext">Some surprises are worth waiting for 🎂</p>
      </div>
    </div>
  );
}
