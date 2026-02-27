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

type Props = {
  onNext: () => void;
};

export default function FriendshipNotePage({ onNext }: Props) {
  return (
    <div className="slide slide--active apology-slide">
      <div className="apology-emojis" aria-hidden="true">
        {Array.from({ length: 14 }).map((_, i) => (
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
            {i % 3 === 0 ? '💜' : i % 3 === 1 ? '🤍' : '😌'}
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
