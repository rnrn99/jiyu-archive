import { style } from '@vanilla-extract/css';

import { vars } from '@/shared/styles/contract.css';
import { space } from '@/shared/styles/spacing';
import * as typography from '@/shared/styles/typography.css';

export const nav = style({
  display: 'flex',
  alignItems: 'center',
  gap: space[24],
});

export const link = style([
  typography.label,
  {
    fontSize: '13px',
    color: vars.color.text.subtitle,
    textDecoration: 'none',
    transition: `color ${vars.motion.speed} ${vars.motion.ease}`,

    ':hover': {
      color: vars.color.text.strong,
    },
  },
]);

export const linkActive = style([
  link,
  {
    color: vars.color.text.strong,
    fontWeight: 600,
  },
]);

export const iconGroup = style({
  display: 'flex',
  alignItems: 'center',
  gap: space[16],
});

export const iconButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '28px',
  height: '28px',
  borderRadius: '6px',
  color: vars.color.text.muted,
  backgroundColor: 'transparent',
  textDecoration: 'none',
  transition: `color ${vars.motion.speed} ${vars.motion.ease}, background-color ${vars.motion.speed} ${vars.motion.ease}`,

  ':hover': {
    color: vars.color.text.strong,
    backgroundColor: vars.color.border,
  },
});

export const iconButtonActive = style([
  iconButton,
  {
    color: vars.color.text.body,
  },
]);
