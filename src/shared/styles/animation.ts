import { keyframes } from '@vanilla-extract/css';

export const fadeUp = (y: number) =>
  keyframes({
    from: { opacity: 0, transform: `translateY(${y}px)` },
    to: { opacity: 1, transform: 'translateY(0)' },
  });
