import { useMemo } from 'react';
import TransitionText from '../components/TransitionText';
import './ApologyPage.css';

const LINES = [
  "Honestly?",
  "I don't even know what we are.",
  "We're cousins, yeah…",
  "but we never really talked that much before.",
  "No deep conversations,",
  "no late-night calls,",
  "maybe we never even tried to understand each other.",
  "And somewhere along the way,",
  "we've been hurting each other without even knowing it.",
  { text: "That's the worst kind of hurt.", strong: true },
];

const EMOJIS = ['💜', '😊', '💗'];

type Props = {
  onNext: () => void;
};

export default function ApologyPage({ onNext }: Props) {
  const emojiStyles = useMemo(
    () =>
      Array.from({ length: 18 }, (_, i) => ({
        left: `${5 + Math.random() * 90}%`,
        bottom: `${-5 - Math.random() * 10}%`,
        animationDelay: `${Math.random() * 4}s`,
        animationDuration: `${7 + Math.random() * 5}s`,
        fontSize: `${16 + Math.random() * 12}px`,
        emoji: EMOJIS[i % 3],
      })),
    [],
  );

  return (
    <div className="slide slide--active apology-slide">
      <div className="apology-emojis" aria-hidden="true">
        {emojiStyles.map((s, i) => (
          <span
            key={i}
            className="apology-emoji"
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
      <section className="section transition-section">
        <h2 className="section-title">💌 A little something real 💌</h2>
        <TransitionText lines={LINES} />
        <div className="slide-nav">
          <button type="button" className="nav-btn nav-btn--next" onClick={onNext}>
            Next →
          </button>
        </div>
      </section>
    </div>
  );
}
