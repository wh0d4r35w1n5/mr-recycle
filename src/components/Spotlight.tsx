import type { ReactNode, MouseEvent } from 'react';
import { cn } from '../lib/utils';

interface SpotlightProps {
  children: ReactNode;
  className?: string;
  dark?: boolean;
}

export function Spotlight({ children, className, dark = false }: SpotlightProps) {
  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

  return (
    <div
      className={cn('spotlight', dark && 'spotlight-dark', className)}
      onMouseMove={onMove}
    >
      {children}
    </div>
  );
}
