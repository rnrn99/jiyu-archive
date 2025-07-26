import { style } from '@vanilla-extract/css';

import { media } from '@/components/media.css';

export const article = style([
  {
    padding: '20px',
  },
  media.desktop({
    padding: '20px 0',
  }),
]);
