import { useMemo } from 'react';
import TransitionText from '../components/TransitionText';
import './ApologyPage.css';

const LINES = [
  "So today, on your birthday,",
  "I don't want to carry that forward.",
  "No more hurting each other quietly.",
  "No more pretending everything's fine.",
  { text: "Let's restart.", strong: true },
  "Not just as cousins who exist in the same family,",
  "but as two people who actually try.",
  "Because honestly? someone like you",
  "is too interesting to just ignore 😏",
  "And family shouldn't feel like strangers ✨",
];

const EMOJIS = ['💜', '🥺', '✨'];

type Props = {
  onNext: () => void;
};

export default function ApologyPage2({ onNext }: Props) {
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
