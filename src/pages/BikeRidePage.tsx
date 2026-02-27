import { useEffect, useState, useMemo } from 'react';
import confetti from 'canvas-confetti';
import './BikeRidePage.css';

const EMOJIS = ['🏍️', '💨', '🌸', '✨'];

export default function BikeRidePage() {
  const [showGift, setShowGift] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowGift(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showGift) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ffb6c1', '#e6e6fa', '#ffd700', '#dda0dd'],
      });
    }
  }, [showGift]);

  const emojiStyles = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => ({
        left: `${5 + Math.random() * 90}%`,
        bottom: `${-5 - Math.random() * 10}%`,
        animationDelay: `${Math.random() * 4}s`,
        animationDuration: `${7 + Math.random() * 5}s`,
        fontSize: `${18 + Math.random() * 14}px`,
        emoji: EMOJIS[i % 4],
      })),
    [],
  );

  return (
    <div className="slide slide--active bike-slide">
      <div className="bike-emojis" aria-hidden="true">
        {emojiStyles.map((s, i) => (
          <span
            key={i}
            className="bike-emoji"
            style={{
              left: s.left,
              bottom: s.bottom,
              animationDelay: s.animationDelay,
              animationDuration: s.animationDuration,
              fontSize: s.fontSize,
            }}
          >
            {s.emoji}
          </span>
        ))}
      </div>

      <div className="bike-content">
        <h2 className="bike-title">One more thing... 🎁</h2>
        <p className="bike-subtitle">You asked for a bike ride, right Karishma?</p>

        <div className={`bike-gift ${showGift ? 'bike-gift--visible' : ''}`}>
          <div className="bike-ticket">
            <div className="bike-ticket-header">🎫 Birthday Gift Voucher</div>
            <div className="bike-ticket-body">
              <span className="bike-ticket-icon">🏍️</span>
              <p className="bike-ticket-text">
                One bike ride with me
              </p>
              <p className="bike-ticket-detail">
                No expiry. No excuses. Just us and the road.
              </p>
            </div>
            <div className="bike-ticket-footer">
              Valid: Whenever you say so 💫
            </div>
          </div>
        </div>

        <p className={`bike-closing ${showGift ? 'bike-closing--visible' : ''}`}>
          Consider this your official birthday gift 😌
          <br />
          Just say when, and we ride.
        </p>
      </div>
    </div>
  );
}
