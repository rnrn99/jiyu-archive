import { style } from '@vanilla-extract/css';

import { media } from '../media.css';

export const header = style({
  width: '100%',

  padding: '24px 0',

  backgroundColor: '#fff',
  borderBottom: '1px solid #e0e0e0',
});

export const container = style([
  {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'column',
    rowGap: 20,

    maxWidth: '768px',
    height: '100%',
    margin: '0 auto',
    padding: '0 16px',
  },
  media.tablet({
    flexDirection: 'row',
    alignItems: 'center',

    padding: '0 20px',
  }),
]);

export const titleWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  rowGap: 4,
});

export const title = style({
  fontSize: '24px',
  fontWeight: 600,
  lineHeight: 1.2,
  letterSpacing: '-0.01em',
  color: '#1a1a1a',
});

export const subTitle = style({
  fontSize: '14px',
  fontWeight: 400,
  color: '#666666',
});
