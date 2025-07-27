import { globalStyle, style } from '@vanilla-extract/css';

import { responsiveStyle } from '@/components/media.css';

export const renderer = style({
  margin: 0,
  padding: 0,
});

globalStyle(`${renderer} h2`, {
  margin: '20px 0',

  fontSize: '20px',
  fontWeight: 600,
  color: '#1a1a1a',
  lineHeight: 1.4,

  ...responsiveStyle({
    tablet: { fontSize: '24px' },
    desktop: { fontSize: '28px' },
  }),
});

globalStyle(`${renderer} h3`, {
  margin: '16px 0',

  fontSize: '18px',
  fontWeight: 600,
  color: '#1a1a1a',
  lineHeight: 1.4,

  ...responsiveStyle({
    tablet: { fontSize: '20px' },
    desktop: { fontSize: '22px' },
  }),
});

globalStyle(`${renderer} .notion-inline-code`, {
  backgroundColor: '#f8f9fa',
  color: '#1a1a1a',
});
