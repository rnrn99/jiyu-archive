import { style } from '@vanilla-extract/css';

import { vars } from '@/shared/styles/contract.css';
import * as typography from '@/shared/styles/typography.css';

import { responsiveStyle } from '../media.css';

export const hashTag = style([
  typography.label,
  {
    padding: '4px 6px',
    borderRadius: '3px',
    fontSize: '10px',
    backgroundColor: vars.color.surfaceSubtitle,
    color: vars.color.text.subtitle,
    whiteSpace: 'nowrap',
    '::before': {
      content: '"#"',
      marginRight: '2px',
    },
  },
  responsiveStyle({
    tablet: {
      fontSize: '12px',
    },
  }),
]);
