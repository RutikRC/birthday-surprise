import { useMemo } from 'react';
import TransitionText from '../components/TransitionText';
import './ApologyPage.css';

const LINES = [
  "You're my cousin —",
  "and honestly, that already means something.",
  "We share the same blood,",
  "the same family chaos,",
  "the same festivals and gatherings 💫",
  "But I feel like we could be more than just",
  "'that cousin I see at family functions.'",
  { text: "I want us to actually be friends.", strong: true },
  "Real ones.",
  "And between us?",
  "I think you're lowkey too cool",
  "for me to not have talked to you sooner 😌",
];

const EMOJIS = ['💜', '🤍', '😌'];

type Props = {
  onNext: () => void;
};

export default function FriendshipNotePage({ onNext }: Props) {
  const emojiStyles = useMemo(
    () =>
      Array.from({ length: 14 }, (_, i) => ({
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
