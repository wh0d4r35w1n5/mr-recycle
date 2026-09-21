import type { ReactNode } from 'react';
import { cn } from '../lib/utils';
import { Reveal } from './Reveal';

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  sub?: string;
  dark?: boolean;
  align?: 'center' | 'left';
}

export function SectionHeading({
  eyebrow,
  title,
  sub,
  dark = false,
  align = 'center',
}: SectionHeadingProps) {
  return (
    <Reveal>
      <div
        className={cn(
          'max-w-3xl mb-12 md:mb-16',
          align === 'center' && 'mx-auto text-center'
        )}
      >
        <p
          className={cn(
            'text-xs font-semibold uppercase tracking-[0.2em] mb-4',
            dark ? 'text-[#78A873]' : 'text-[#4A7144]'
          )}
        >
          {eyebrow}
        </p>
        <h2
          className={cn(
            'text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight leading-tight',
            dark ? 'text-[#F7F7F7]' : 'text-[#142A1E]'
          )}
        >
          {title}
        </h2>
        {sub && (
          <p
            className={cn(
              'mt-4 md:mt-5 text-base md:text-lg leading-relaxed',
              dark ? 'text-white/60' : 'text-gray-600'
            )}
          >
            {sub}
          </p>
        )}
      </div>
    </Reveal>
  );
}
