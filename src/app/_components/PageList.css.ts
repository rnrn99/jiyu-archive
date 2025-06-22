import { style } from '@vanilla-extract/css';

export const article = style({
  margin: '80px 0', //TODO: 헤더, 푸터 추가시 삭제 필요
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
      padding: '16px 0',
    },
  },
});

export const link = style({
  textDecoration: 'none',
});

export const title = style({
  fontSize: 18,
  lineHeight: '26px',
  wordBreak: 'keep-all',
  color: '#333333',
});

export const written = style({
  display: 'block',
  marginTop: 8,
  fontSize: 16,
  color: '#8c8c8c',

  '@media': {
    '(min-width: 768px)': {
      marginTop: 16,
    },
  },
});
