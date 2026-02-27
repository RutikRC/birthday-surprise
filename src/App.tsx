import { useDateLock } from './useDateLock';
import LockScreen from './components/LockScreen';
import BirthdayPage from './components/BirthdayPage';

function App() {
  const { isUnlocked, timeLeft } = useDateLock();

  return (
    <>
      {!isUnlocked && <LockScreen timeLeft={timeLeft} />}
      <div className={isUnlocked ? 'birthday-visible' : 'birthday-hidden'}>
        <BirthdayPage />
      </div>
    </>
  );
}

export default App;
