import TransitionText from '../components/TransitionText';

const FINAL_LINES = [
  "I'm not great with words,",
  "and I probably overthought this whole thing.",
  "But I genuinely mean it.",
  "I hope this year treats you really well.",
  "And maybe…",
  "this can be the start of us",
  "actually being close for real.",
  "Not just as cousins,",
  { text: "but as people who actually care about each other ❤️", strong: true },
  "",
  { text: "Happy Birthday to you 🎂🎉", strong: true },
];

type Props = {
  onNext: () => void;
};

export default function FinalMessagePage({ onNext }: Props) {
  return (
    <div className="slide slide--active">
      <section className="section transition-section">
        <TransitionText lines={FINAL_LINES} className="transition-text--final" />
        <div className="slide-nav">
          <button type="button" className="nav-btn nav-btn--next" onClick={onNext}>
            Next →
          </button>
        </div>
      </section>
    </div>
  );
}
