import { useState } from 'react';
import MusicToggle from './MusicToggle';
import HeroPage from '../pages/HeroPage';
import ApologyPage from '../pages/ApologyPage';
import ApologyPage2 from '../pages/ApologyPage2';
import FriendshipNotePage from '../pages/FriendshipNotePage';
import ComplimentsPage from '../pages/ComplimentsPage';
import FinalMessagePage from '../pages/FinalMessagePage';
import ForgiveMePage from '../pages/ForgiveMePage';
import BikeRidePage from '../pages/BikeRidePage';
import './BirthdayPage.css';

const TOTAL_STEPS = 8;

export default function BirthdayPage() {
  const [step, setStep] = useState(0);

  const goNext = () => setStep((s) => Math.min(s + 1, TOTAL_STEPS - 1));

  const renderPage = () => {
    switch (step) {
      case 0:
        return <HeroPage onNext={goNext} />;
      case 1:
        return <ApologyPage onNext={goNext} />;
      case 2:
        return <ApologyPage2 onNext={goNext} />;
      case 3:
        return <FriendshipNotePage onNext={goNext} />;
      case 4:
        return <ComplimentsPage onNext={goNext} />;
      case 5:
        return <FinalMessagePage onNext={goNext} />;
      case 6:
        return <ForgiveMePage onNext={goNext} />;
      case 7:
        return <BikeRidePage />;
      default:
        return null;
    }
  };

  return (
    <div className="birthday-page">
      <MusicToggle />
      <div className="birthday-bg">
        <div className="birthday-particles" />
      </div>

      <div className="slides" key={step}>
        {renderPage()}
      </div>
    </div>
  );
}
