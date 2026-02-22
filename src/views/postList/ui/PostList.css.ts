import { style } from '@vanilla-extract/css';

import { fadeUp } from '@/shared/styles/animation';
import { vars } from '@/shared/styles/contract.css';
import { space } from '@/shared/styles/spacing';
import * as typography from '@/shared/styles/typography.css';

export const article = style({
  padding: `0 ${space[20]}`,
});

export const topbar = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: `${space[32]} 0 ${space[24]}`,
  borderBottom: `1px solid ${vars.color.border}`,
});

export const topbarTitle = style([
  typography.label,
  {
    fontWeight: 600,
    color: vars.color.text.strong,
    letterSpacing: '-0.01em',
  },
]);

export const topbarCount = style([
  typography.monoSmall,
  {
    color: vars.color.text.muted,
    letterSpacing: '0.06em',
  },
]);

export const link = style({
  display: 'block',
  textDecoration: 'none',
  color: vars.color.text.strong,
});

export const listItem = style({
  animationName: fadeUp(10),
  animationDuration: '0.4s',
  animationTimingFunction: vars.motion.ease,
  animationFillMode: 'both',
  // CSS custom property로 delay 주입
  animationDelay: 'var(--item-delay, 0s)',
});
