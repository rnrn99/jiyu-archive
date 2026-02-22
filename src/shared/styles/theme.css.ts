import { createTheme } from '@vanilla-extract/css';

import { vars } from './contract.css';
import { primitives } from './primitives';

export const lightTheme = createTheme(vars, {
  color: {
    bg: primitives.color.white,
    surfaceSubtle: primitives.color.grey50,
    codeBlock: primitives.color.codeBlock,

    text: {
      strong: primitives.color.grey900,
      body: primitives.color.grey700,
      subtle: primitives.color.grey500,
      muted: primitives.color.grey300,
    },

    border: primitives.color.grey100,
    borderHeavy: primitives.color.grey200,

    accent: {
      default: primitives.color.orange,
      faint: primitives.color.orangeFaint,
      faint2: primitives.color.orangeFaint2,
    },
  },

  font: {
    sans: 'var(--font-noto-sans), sans-serif',
    mono: 'var(--font-dm-mono), monospace',
  },

  layout: {
    maxWidth: '720px',
  },

  motion: {
    ease: 'cubic-bezier(0.25, 0, 0, 1)',
    speed: '0.18s',
  },
});
