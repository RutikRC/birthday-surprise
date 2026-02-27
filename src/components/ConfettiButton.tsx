import { useCallback } from 'react';
import confetti from 'canvas-confetti';
import './ConfettiButton.css';

type Props = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function ConfettiButton({ children, className = '', onClick }: Props) {
  const fire = useCallback(() => {
    const count = 120;
    const defaults = { origin: { y: 0.7 }, zIndex: 200 };

    function shoot() {
      confetti({
        ...defaults,
        particleCount: count,
        spread: 70,
        colors: ['#ffb6c1', '#e6e6fa', '#ffd700', '#ffefd5', '#dda0dd'],
      });
    }

    shoot();
    setTimeout(shoot, 150);
    setTimeout(shoot, 300);
    onClick?.();
  }, [onClick]);

  return (
    <button type="button" className={`confetti-btn ${className}`.trim()} onClick={fire}>
      {children}
    </button>
  );
}
