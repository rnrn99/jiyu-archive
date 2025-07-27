import { style } from '@vanilla-extract/css';

import { responsiveStyle } from '../media.css';

export const tabList = style([
  {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: 20,
    flexWrap: 'wrap',
    padding: '14px 0',
  },
  responsiveStyle({
    tablet: { columnGap: 24, padding: '16px 0' },
    desktop: { columnGap: 32, padding: '20px 0' },
  }),
]);
