import FriendshipCards from '../components/FriendshipCards';

type Props = {
  onNext: () => void;
};

export default function FriendshipCardsPage({ onNext }: Props) {
  return (
    <div className="slide slide--active">
      <FriendshipCards />
      <div className="slide-nav">
        <button type="button" className="nav-btn nav-btn--next" onClick={onNext}>
          Next →
        </button>
      </div>
    </div>
  );
}
