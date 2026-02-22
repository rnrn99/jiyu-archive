import { keyframes } from '@vanilla-extract/css';

export const fadeUp = (y: number) =>
  keyframes({
    from: { opacity: 0, transform: `translateY(${y}px)` },
    to: { opacity: 1, transform: 'translateY(0)' },
  });

export const ping = (scale: number) =>
  keyframes({
    '0%': { transform: 'scale(1)', opacity: 0.8 },
    '100%': { transform: `scale(${scale})`, opacity: 0 },
  });
