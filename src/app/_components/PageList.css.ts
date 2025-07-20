import { style } from '@vanilla-extract/css';

export const article = style({
  padding: '20px',
});

export const listItem = style({
  selectors: {
    '&:not(:last-of-type)': {
      marginBottom: 20,
    },
  },
});

export const link = style({
  display: 'block',
  textDecoration: 'none',
  color: 'initial',
});
