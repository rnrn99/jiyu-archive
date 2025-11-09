import { style } from '@vanilla-extract/css';

import { responsiveStyle } from '@/components/media.css';

export const header = style([
  {
    marginTop: '8px',
    marginBottom: '32px',
  },
  responsiveStyle({
    desktop: { marginBottom: '48px' },
  }),
]);

export const postMetaWrapper = style({
  display: 'flex',
  alignItems: 'center',
  columnGap: '12px',
  marginBottom: '16px',
});

export const category = style([
  {
    fontSize: '13px',
    fontWeight: 400,
    color: '#999999',
  },
  responsiveStyle({
    desktop: {
      fontSize: '14px',
    },
  }),
]);

export const written = style([
  {
    fontSize: '12px',
    color: '#aaa',
    fontVariantNumeric: 'tabular-nums',
  },
  responsiveStyle({
    desktop: {
      fontSize: '13px',
    },
  }),
]);

export const title = style([
  {
    fontSize: '24px',
    fontWeight: 700,
    lineHeight: 1.3,
    color: '#1a1a1a',
    wordBreak: 'keep-all',
  },
  responsiveStyle({
    tablet: { fontSize: '26px' },
    desktop: {
      fontSize: '32px',
    },
  }),
]);

export const divider = style([
  {
    margin: '24px 0',
  },
  responsiveStyle({
    desktop: {
      margin: '32px 0',
    },
  }),
]);
