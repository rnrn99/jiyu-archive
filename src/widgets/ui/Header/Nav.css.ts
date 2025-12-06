import { style } from '@vanilla-extract/css';

export const nav = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  columnGap: '20px',
  flexWrap: 'nowrap',
});

export const link = style({
  padding: '6px 0',
  fontSize: '14px',
  fontWeight: 500,
  color: '#666666',
  textDecoration: 'none',
});
