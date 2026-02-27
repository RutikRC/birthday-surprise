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

type Props = {
  onNext: () => void;
};

export default function ApologyPage({ onNext }: Props) {
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
            {i % 3 === 0 ? '💜' : i % 3 === 1 ? '😊' : '💗'}
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
