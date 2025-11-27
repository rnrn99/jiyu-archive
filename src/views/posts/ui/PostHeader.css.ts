import { style } from '@vanilla-extract/css';

import { responsiveStyle } from '@/shared/ui/media.css';

export const header = style({
  marginTop: '8px',
});

export const postMetaWrapper = style({
  display: 'flex',
  alignItems: 'center',
  columnGap: '12px',
  marginBottom: '16px',
});

export const category = style([
  {
    fontSize: '14px',
    fontWeight: 400,
    color: '#999999',
  },
  responsiveStyle({
    desktop: {
      fontSize: '15px',
    },
  }),
]);

export const written = style([
  {
    fontSize: '13px',
    color: '#aaa',
    fontVariantNumeric: 'tabular-nums',
  },
  responsiveStyle({
    desktop: {
      fontSize: '14px',
    },
  }),
]);

export const title = style([
  {
    fontSize: '28px',
    fontWeight: 700,
    lineHeight: 1.3,
    color: '#1a1a1a',
    wordBreak: 'keep-all',
  },
  responsiveStyle({
    tablet: { fontSize: '30px' },
    desktop: {
      fontSize: '32px',
    },
  }),
]);

export const divider = style({
  margin: '16px 0',
});
