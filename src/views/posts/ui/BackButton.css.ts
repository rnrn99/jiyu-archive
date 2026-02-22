import { style } from '@vanilla-extract/css';

import { vars } from '@/shared/styles/contract.css';
import { space } from '@/shared/styles/spacing';
import * as typography from '@/shared/styles/typography.css';
import { responsiveStyle } from '@/shared/ui/media.css';

export const wrapper = style([
  {
    paddingLeft: space[20],
    paddingTop: space[20],
  },
  responsiveStyle({
    desktop: {
      paddingLeft: '0',
    },
  }),
]);

export const button = style([
  typography.label,
  {
    display: 'inline-flex',
    alignItems: 'center',
    gap: space[8],
    border: 'none',
    backgroundColor: 'transparent',
    color: vars.color.text.subtitle,
    padding: 0,
    cursor: 'pointer',
    transition: `color ${vars.motion.speed} ${vars.motion.ease}`,

    ':hover': {
      color: vars.color.text.strong,
    },
  },
]);

export const icon = style({
  flexShrink: 0,
  transition: `transform ${vars.motion.speed} ${vars.motion.ease}`,

  selectors: {
    [`${button}:hover &`]: {
      transform: 'translateX(-2px)',
    },
  },
});
