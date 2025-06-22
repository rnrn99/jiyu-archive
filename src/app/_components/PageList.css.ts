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

export const link = style({
  display: 'block',
  padding: '24px 0',
  textDecoration: 'none',
  color: 'initial',
});

export const title = style({
  position: 'relative',
  display: 'inline-block',
  fontSize: 18,
  lineHeight: '26px',
  wordBreak: 'keep-all',
  color: '#333333',

  selectors: {
    '&::before, &::after': {
      position: 'absolute',
      display: 'inline-block',
      opacity: 0,
      transition: 'transform 300ms, opacity 200ms',
    },
    '&::before': {
      content: '[',
      left: -10,
      transform: 'translateX(10px)',
    },
    '&::after': {
      content: ']',
      right: -10,
      transform: 'translateX(-10px)',
    },

    [`${link}:hover &::before, ${link}:hover &::after`]: {
      opacity: 1,
      transform: 'translateX(0)',
    },
  },
});

export const postSummaryWrapper = style({
  display: 'flex',
  alignItems: 'center',
  marginTop: 8,

  fontSize: 16,
  color: '#8c8c8c',
});
