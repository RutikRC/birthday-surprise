import TransitionText from '../components/TransitionText';
import './ApologyPage.css';

const LINES = [
  "Because you're family,",
  "and family shouldn't feel like strangers.",
  "I don't know why we never really connected —",
  "maybe timing, maybe just life getting in the way.",
  "Maybe we were both too stubborn to start.",
  "But today, on your birthday,",
  "I just want to say…",
  { text: "I'd like to change that.", strong: true },
  "Let's actually start something real —",
  "because honestly? someone like you",
  "is too interesting to just ignore 😏",
];

type Props = {
  onNext: () => void;
};

export default function ApologyPage2({ onNext }: Props) {
  return (
    <div className="slide slide--active apology-slide">
      <div className="apology-emojis" aria-hidden="true">
        {Array.from({ length: 18 }).map((_, i) => (
          <span
            key={i}
            className="apology-emoji"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
              fontSize: `${14 + Math.random() * 14}px`,
            }}
          >
            {i % 3 === 0 ? '💜' : i % 3 === 1 ? '🥺' : '✨'}
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
