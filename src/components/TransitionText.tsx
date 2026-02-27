import './TransitionText.css';

type Line = string | { text: string; strong?: boolean };

type Props = {
  lines: Line[];
  className?: string;
};

function parseLine(line: Line): { words: string[]; strong?: boolean } {
  if (typeof line === 'string') {
    return { words: line.split(/\s+/) };
  }
  return { words: line.text.split(/\s+/), strong: line.strong };
}

export default function TransitionText({ lines, className = '' }: Props) {
  let wordIndex = 0;
  return (
    <div className={`transition-text ${className}`.trim()}>
      {lines.map((line, i) => {
        const { words, strong } = parseLine(line);
        return (
          <div key={i} className="transition-line">
            {words.map((word, j) => {
              const delay = wordIndex++ * 0.045;
              return (
                <span
                  key={`${i}-${j}`}
                  className={`transition-word ${strong ? 'transition-word--strong' : ''}`}
                  style={{ animationDelay: `${delay}s` }}
                >
                  {word}{' '}
                </span>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
