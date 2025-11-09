import { style } from '@vanilla-extract/css';

export const article = style({
  padding: '20px',
});

export const listItem = style({
  selectors: {
    '&:not(:last-of-type)': {
      borderBottom: '1px solid #e0e0e0',
    },
  },
});

export const link = style({
  display: 'block',
  textDecoration: 'none',
  color: 'initial',
});
