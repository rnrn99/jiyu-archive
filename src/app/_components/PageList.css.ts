import { style } from '@vanilla-extract/css';

export const article = style({
  marginTop: 80, // TODO: 헤더 추가하면 삭제
  padding: '0 20px',
});

export const pageTitle = style({
  fontSize: 40,
  color: '#333333',
  marginBottom: 40,
});

export const postItem = style({
  selectors: {
    '&:not(:last-of-type)': {
      marginBottom: 32,
    },
  },
});

export const link = style({
  textDecoration: 'none',
});

export const title = style({
  fontSize: 18,
  color: '#333333',
});

export const written = style({
  display: 'block',
  marginTop: 16,
  fontSize: 16,
  color: '#8c8c8c',
});
