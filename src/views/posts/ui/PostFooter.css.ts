import { style } from '@vanilla-extract/css';

import { vars } from '@/shared/styles/contract.css';
import { space } from '@/shared/styles/spacing';
import * as typography from '@/shared/styles/typography.css';

export const footer = style({
  marginTop: space[56],
  paddingTop: space[28],
  borderTop: `1px solid ${vars.color.border}`,
});

export const nav = style({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: space[12],
});

export const item = style({
  display: 'flex',
  flexDirection: 'column',
  gap: space[8],
  padding: space[16],
  border: `1px solid ${vars.color.border}`,
  borderRadius: '8px',
  textDecoration: 'none',
  transition: `border-color ${vars.motion.speed} ${vars.motion.ease}, background-color ${vars.motion.speed} ${vars.motion.ease}`,

  ':hover': {
    borderColor: vars.color.accent.default,
    backgroundColor: vars.color.accent.faint,
  },
});

export const itemNext = style({
  textAlign: 'right',
});

export const label = style([
  typography.monoSmall,
  {
    color: vars.color.text.muted,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
  },
]);

export const labelNext = style({
  textAlign: 'right',
});

export const title = style([
  typography.label,
  {
    color: vars.color.text.strong,
    lineHeight: 1.4,
    fontWeight: 500,
  },
]);
