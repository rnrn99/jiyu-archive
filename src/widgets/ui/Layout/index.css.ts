import { style } from '@vanilla-extract/css';

import { vars } from '@/shared/styles/contract.css';

export const main = style({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
});

export const layout = style([
  {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  {
    '@media': {
      '(min-width: 720px)': {
        width: vars.layout.maxWidth,
        margin: '0 auto',
      },
    },
  },
]);
