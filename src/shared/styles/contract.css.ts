import { createThemeContract } from '@vanilla-extract/css';

export const vars = createThemeContract({
  color: {
    bg: null,
    surfaceSubtitle: null,
    codeBlock: null,

    text: {
      strong: null,
      body: null,
      subtitle: null,
      muted: null,
    },

    border: null,
    borderHeavy: null,

    accent: {
      default: null,
      faint: null,
      faint2: null,
    },
  },

  font: {
    sans: null,
    mono: null,
  },

  layout: {
    maxWidth: null,
  },

  motion: {
    ease: null,
    speed: null,
  },
});
