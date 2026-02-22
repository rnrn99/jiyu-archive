import { style } from '@vanilla-extract/css';

import { vars } from '@/shared/styles/contract.css';
import { space } from '@/shared/styles/spacing';
import * as typography from '@/shared/styles/typography.css';

export const button = style([
  typography.label,
  {
    display: 'inline-flex',
    alignItems: 'center',
    columnGap: space[8],
    border: 'none',
    backgroundColor: 'transparent',
    color: vars.color.text.subtitle,
    marginTop: space[20],
    cursor: 'pointer',
    transition: `color ${vars.motion.speed} ${vars.motion.ease}`,

    ':hover': {
      color: vars.color.text.strong,
    },
  },
]);
