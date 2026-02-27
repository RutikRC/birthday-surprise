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
