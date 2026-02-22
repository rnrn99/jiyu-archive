import { style } from '@vanilla-extract/css';

import { vars } from '@/shared/styles/contract.css';
import { space } from '@/shared/styles/spacing';
import * as typography from '@/shared/styles/typography.css';
import { responsiveStyle } from '@/shared/ui/media.css';

export const nav = style([
  {
    display: 'none',
  },
  responsiveStyle({
    desktop: {
      position: 'fixed',
      top: '300px',
      right: space[20],
      display: 'block',
      maxWidth: '250px',
      paddingLeft: space[14],
      borderLeft: `1px solid ${vars.color.border}`,
    },
  }),
]);

export const list = style({
  padding: 0,
  margin: 0,
  listStyle: 'none',
});

export const listItem = style({
  margin: '0',
  padding: '0',
  selectors: {
    '&[data-level="2"]': {
      paddingLeft: '0',
    },
    '&[data-level="3"]': {
      paddingLeft: space[12],
    },
    '&[data-level="4"]': {
      paddingLeft: space[24],
    },
  },
});

export const link = style([
  typography.labelSmall,
  {
    display: 'block',
    lineHeight: 1.4,
    color: vars.color.text.muted,
    textDecoration: 'none',
    padding: `${space[4]} 0`,
    transition: `color ${vars.motion.speed} ${vars.motion.ease}`,
    overflow: 'hidden',

    ':hover': {
      color: vars.color.text.strong,
    },
  },
]);

export const linkActive = style([
  link,
  {
    color: vars.color.accent.default,
    fontWeight: 600,

    ':hover': {
      color: vars.color.accent.default,
    },
  },
]);
