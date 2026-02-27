import { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import './BikeRidePage.css';

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

  return (
    <div className="slide slide--active bike-slide">
      <div className="bike-emojis" aria-hidden="true">
        {Array.from({ length: 12 }).map((_, i) => (
          <span
            key={i}
            className="bike-emoji"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 4}s`,
              fontSize: `${16 + Math.random() * 16}px`,
            }}
          >
            {i % 4 === 0 ? '🏍️' : i % 4 === 1 ? '💨' : i % 4 === 2 ? '🌸' : '✨'}
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
