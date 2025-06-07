import { style } from '@vanilla-extract/css';

const MAX_WIDTH = 800;

export const layout = style({
  '@media': {
    '(min-width: 800px)': {
      width: MAX_WIDTH,
      margin: '0 auto',
    },
  },
});
