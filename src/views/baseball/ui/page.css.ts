import { style } from '@vanilla-extract/css';

import { space } from '@/shared/styles/spacing';
import { responsiveStyle } from '@/shared/ui/media.css';

export const article = style([
  {
    padding: space[20],
  },
  responsiveStyle({
    desktop: {
      padding: `${space[20]} 0`,
    },
  }),
]);
