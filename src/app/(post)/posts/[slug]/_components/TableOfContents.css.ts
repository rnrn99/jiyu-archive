import { style } from '@vanilla-extract/css';

import { responsiveStyle } from '@/components/media.css';

export const nav = style([
  {
    display: 'none',
  },
  responsiveStyle({
    desktop: {
      position: 'fixed',
      top: '300px',
      right: '20px',
      display: 'block',
      maxWidth: '250px',
      paddingLeft: '14px',
      borderLeft: '1px solid #e0e0e0',
    },
  }),
]);

export const list = style({
  padding: 0,
  margin: 0,
  listStyle: 'none',
});

export const listItem = style({
  margin: '0',
  padding: '0',
  selectors: {
    '&[data-level="2"]': {
      paddingLeft: '0',
    },
    '&[data-level="3"]': {
      paddingLeft: '12px',
    },
    '&[data-level="4"]': {
      paddingLeft: '24px',
    },
  },
});

export const link = style({
  display: 'block',

  fontSize: '12px',
  lineHeight: '1.4',
  color: '#6b7280',
  textDecoration: 'none',
  padding: '4px 0',
  transition: 'color 0.2s ease',
  overflow: 'hidden',

  ':hover': {
    color: '#111827',
  },
});

export const linkActive = style([
  link,
  {
    color: '#FF6B35',
    fontWeight: '600',

    ':hover': {
      color: '#FC4E00',
    },
  },
]);
