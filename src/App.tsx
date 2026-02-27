import { useState } from 'react';
import { useDateLock } from './useDateLock';
import LockScreen from './components/LockScreen';
import BirthdayPage from './components/BirthdayPage';

function App() {
  const { isUnlocked, timeLeft } = useDateLock();
  const [testUnlock, setTestUnlock] = useState(false);
  const showUnlocked = isUnlocked || testUnlock;

  return (
    <>
      {!showUnlocked && (
        <LockScreen
          timeLeft={timeLeft}
          onTestUnlock={() => setTestUnlock(true)}
        />
      )}
      <div className={showUnlocked ? 'birthday-visible' : 'birthday-hidden'}>
        <BirthdayPage
          isTestMode={testUnlock}
          onLockAgain={() => setTestUnlock(false)}
        />
      </div>
    </>
  );
}

export default App;
