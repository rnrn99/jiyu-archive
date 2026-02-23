import { style } from '@vanilla-extract/css';

import { fadeUp } from '@/shared/styles/animation';
import { vars } from '@/shared/styles/contract.css';
import { space } from '@/shared/styles/spacing';
import * as typography from '@/shared/styles/typography.css';
import { responsiveStyle } from '@/shared/ui/media.css';

export const section = style([
  {
    animationName: fadeUp(8),
    animationDuration: '0.4s',
    animationDelay: '0.08s',
    animationTimingFunction: vars.motion.ease,
    animationFillMode: 'both',
  },
]);

export const topbar = style([
  {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    gap: space[16],
    padding: `${space[32]} 0 ${space[24]}`,
    borderBottom: `1px solid ${vars.color.border}`,
  },
]);

export const topbarLeft = style({
  display: 'flex',
  flexDirection: 'column',
  gap: space[8],
});

export const eyebrow = style([
  typography.monoSmall,
  {
    color: vars.color.accent.default,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
  },
]);

export const title = style([
  typography.heading2,
  {
    fontWeight: 500,
    color: vars.color.text.strong,
  },
]);

export const statsGroup = style([
  {
    display: 'flex',
    alignItems: 'flex-end',
    gap: space[16],
    flexShrink: 0,
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  responsiveStyle({
    tablet: {
      gap: space[20],
    },
  }),
]);

export const statItem = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const statNumber = style([
  {
    fontFamily: vars.font.mono,
    fontSize: '18px',
    fontWeight: 500,
    color: vars.color.text.strong,
    lineHeight: 1,
    letterSpacing: 0,
  },
]);

export const statLabel = style({
  fontFamily: vars.font.sans,
  fontSize: '10px',
  color: vars.color.text.muted,
  marginTop: space[4],
  letterSpacing: '0.02em',
});

export const statSeparator = style({
  width: '1px',
  height: '28px',
  background: vars.color.border,
  alignSelf: 'flex-end',
  marginBottom: '2px',
  flexShrink: 0,
});
