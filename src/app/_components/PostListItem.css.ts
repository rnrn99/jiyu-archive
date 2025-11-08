import { style } from '@vanilla-extract/css';

import { responsiveStyle } from '@/components/media.css';

export const postListItem = style([
  {
    padding: '24px 0',
    borderBottom: '1px solid #e0e0e0',
  },
  responsiveStyle({
    tablet: { padding: '26px 0' },
    desktop: { padding: '28px 0' },
  }),
]);

export const header = style([
  {
    display: 'flex',
    columnGap: '12px',
    marginBottom: '12px',
  },
  responsiveStyle({
    tablet: { columnGap: '14px', marginBottom: '14px' },
    desktop: { columnGap: '16px', marginBottom: '16px' },
  }),
]);

export const title = style([
  {
    maxWidth: '70%',
    flex: '0 1 auto',
    fontSize: '15px',
    fontWeight: 500,
  },
  responsiveStyle({
    tablet: { fontSize: '17px' },
    desktop: { fontSize: '18px' },
  }),
]);

export const divider = style({
  flex: '1 1 0',
  width: '100%',
  border: 'none',
  borderTop: '2px dotted #d0d0d0',
});

export const category = style([
  {
    flex: '0 0 auto',
    fontSize: '12px',
    fontWeight: 400,
    whiteSpace: 'nowrap',
    color: '#999999',
  },
  responsiveStyle({
    tablet: { fontSize: '13px' },
    desktop: { fontSize: '14px' },
  }),
]);

export const written = style([
  {
    fontSize: '12px',
    fontWeight: 400,
    color: '#aaaaaa',
  },
  responsiveStyle({
    tablet: { fontSize: '13px' },
    desktop: { fontSize: '14px' },
  }),
]);
