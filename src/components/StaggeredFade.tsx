import { useRef } from 'react';
import type { CSSProperties } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '../lib/utils';

interface StaggeredFadeProps {
  text: string;
  className?: string;
  style?: CSSProperties;
}

export function StaggeredFade({ text, className, style }: StaggeredFadeProps) {
  const ref = useRef<HTMLHeadingElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.h1
      ref={ref}
      className={cn(
        'text-xl text-center sm:text-4xl font-bold tracking-tighter md:text-6xl md:leading-[4rem]',
        className
      )}
      style={style}
    >
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.3, delay: i * 0.03 }}
        >
          {char}
        </motion.span>
      ))}
    </motion.h1>
  );
}
