import { style } from '@vanilla-extract/css';

import { responsiveStyle } from '@/components/media.css';

export const header = style({
  margin: '20px 0',
});

export const postMetaWrapper = style({
  display: 'flex',
  alignItems: 'center',
  columnGap: '8px',
  marginBottom: '16px',
});

export const written = style({
  fontSize: '14px',
  color: '#999999',
});

export const title = style([
  {
    fontSize: '24px',
    fontWeight: 700,
    lineHeight: 1.3,
    color: '#1a1a1a',
  },
  responsiveStyle({
    tablet: { fontSize: '28px' },
    desktop: {
      fontSize: '36px',
    },
  }),
]);
