import { style } from '@vanilla-extract/css';

import { responsiveStyle } from '@/components/media.css';

export const article = style([
  {
    padding: '20px',
  },
  responsiveStyle({
    desktop: {
      padding: '20px 0',
    },
  }),
]);
