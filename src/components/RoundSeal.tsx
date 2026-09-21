import { Sprout } from 'lucide-react';
import { cn } from '../lib/utils';

interface RoundSealProps {
  text?: string;
  className?: string;
}

export function RoundSeal({
  text = 'WE ASSIST CO · IN THE HABIT OF GROWING BUSINESSES · ',
  className,
}: RoundSealProps) {
  return (
    <div className={cn('round-seal', className)}>
      <svg viewBox="0 0 100 100" aria-hidden="true">
        <defs>
          <path
            id="seal-circle"
            d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
            fill="none"
          />
        </defs>
        <text className="fill-current">
          <textPath href="#seal-circle">{text}</textPath>
        </text>
      </svg>
      <Sprout
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6"
        strokeWidth={1.4}
        aria-hidden="true"
      />
    </div>
  );
}
