import { style } from '@vanilla-extract/css';

const MAX_WIDTH = 768;

export const layout = style({
  '@media': {
    '(min-width: 768px)': {
      width: MAX_WIDTH,
      margin: '0 auto',
    },
  },
});
