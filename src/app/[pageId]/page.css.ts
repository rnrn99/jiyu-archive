import { globalStyle, style } from '@vanilla-extract/css';

export const article = style({
  margin: '80px 0',
});

globalStyle(`${article} > main`, {
  padding: 0,
  margin: 0,
  width: '100%',
});

export const title = style({
  marginBottom: 32,
  fontSize: 32,
  letterSpacing: -0.8,
});
