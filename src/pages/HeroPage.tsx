import birthdayDog from '../assets/dog-2.png';

type Props = {
  onNext: () => void;
};

export default function HeroPage({ onNext }: Props) {
  return (
    <div className="slide slide--active">
      <header className="hero section">
        <img src={birthdayDog} alt="Happy Birthday" className="hero-logo" />
        <h1 className="hero-title">Happy Birthday, Karishma 💜😊</h1>
        <p className="hero-subtext">
          This isn't just a random birthday wish…
          <br />
          I actually put some thought into this one.
          <br />
          So just hear me out? 💫
        </p>
        <button type="button" className="cta-btn" onClick={onNext}>
          👉 Okay, go on
        </button>
      </header>
    </div>
  );
}
