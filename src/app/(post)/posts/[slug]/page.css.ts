import { style } from '@vanilla-extract/css';

import { responsiveStyle } from '@/shared/ui/media.css';

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
