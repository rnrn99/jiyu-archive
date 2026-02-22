import { style } from '@vanilla-extract/css';

import { space } from '@/shared/styles/spacing';

import { responsiveStyle } from '../media.css';

export const tabList = style([
  {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: space[20],
    flexWrap: 'wrap',
    padding: `${space[14]} 0`,
  },
  responsiveStyle({
    tablet: { columnGap: space[24], padding: `${space[16]} 0` },
    desktop: { columnGap: space[32], padding: `${space[20]} 0` },
  }),
]);
