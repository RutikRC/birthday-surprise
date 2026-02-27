import ForgiveMeSlide from '../components/ForgiveMeSlide';

type Props = {
  onNext: () => void;
};

export default function ForgiveMePage({ onNext }: Props) {
  return (
    <div className="slide slide--active">
      <ForgiveMeSlide onYes={onNext} />
    </div>
  );
}
