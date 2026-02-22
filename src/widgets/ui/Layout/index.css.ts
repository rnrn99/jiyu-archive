import { style } from '@vanilla-extract/css';

import { vars } from '@/shared/styles/contract.css';

export const layout = style({
  '@media': {
    '(min-width: 720px)': {
      width: vars.layout.maxWidth,
      margin: '0 auto',
    },
  },
});
