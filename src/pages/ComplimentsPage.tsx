const COMPLIMENTS = [
  'Family by blood, friend by choice',
  'Lowkey the cool cousin',
  'Too pretty to not be friends with',
  'Someone worth knowing better',
  'The vibe the family needed',
  'Dangerously underrated',
];

type Props = {
  onNext: () => void;
};

export default function ComplimentsPage({ onNext }: Props) {
  return (
    <div className="slide slide--active">
      <section className="section">
        <h2 className="section-title">💖 What I think about you...</h2>
        <div className="compliments-grid">
          {COMPLIMENTS.map((text, i) => (
            <div key={i} className="compliment-card" style={{ animationDelay: `${i * 0.08}s` }}>
              {text}
            </div>
          ))}
        </div>
        <div className="slide-nav">
          <button type="button" className="nav-btn nav-btn--next" onClick={onNext}>
            Next →
          </button>
        </div>
      </section>
    </div>
  );
}
