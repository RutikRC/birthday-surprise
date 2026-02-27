import { useState, useEffect } from 'react';

const MARCH_5 = { month: 2, day: 5 }; // March = 2 in JS Date (0-indexed)

function getUnlockDate(): Date {
  const now = new Date();
  const year = now.getFullYear();
  return new Date(year, MARCH_5.month, MARCH_5.day, 0, 0, 0, 0);
}

function getTimeRemaining(target: Date): { days: number; hours: number; minutes: number; seconds: number } {
  const now = new Date();
  const diff = target.getTime() - now.getTime();

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const seconds = Math.floor((diff / 1000) % 60);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  return { days, hours, minutes, seconds };
}

function getInitialState() {
  const unlockDate = getUnlockDate();
  const now = new Date();
  const isUnlocked = now >= unlockDate;
  return {
    isUnlocked,
    timeLeft: getTimeRemaining(unlockDate),
    unlockDate,
  };
}

export function useDateLock() {
  const [state, setState] = useState(getInitialState);
  const { unlockDate } = state;

  useEffect(() => {
    const check = () => {
      const now = new Date();
      const unlocked = now >= unlockDate;
      setState((prev) => ({
        ...prev,
        isUnlocked: unlocked,
        timeLeft: unlocked ? prev.timeLeft : getTimeRemaining(unlockDate),
      }));
    };

    check();
    const interval = setInterval(check, 1000);
    return () => clearInterval(interval);
  }, [unlockDate.getTime()]);

  return state;
}
