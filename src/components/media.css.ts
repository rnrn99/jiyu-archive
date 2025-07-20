import { style, StyleRule } from '@vanilla-extract/css';

export const media = {
  tablet: (styles: StyleRule) =>
    style({
      '@media': {
        '(min-width: 481px)': { ...styles },
      },
    }),
  desktop: (styles: StyleRule) =>
    style({
      '@media': {
        '(min-width: 769px)': { ...styles },
      },
    }),
};
