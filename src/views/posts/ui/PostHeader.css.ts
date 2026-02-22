import { style } from '@vanilla-extract/css';

import { vars } from '@/shared/styles/contract.css';
import { space } from '@/shared/styles/spacing';
import * as typography from '@/shared/styles/typography.css';

export const header = style({
  padding: `${space[24]} 0 ${space[36]}`,
  borderBottom: `1px solid ${vars.color.border}`,
  marginBottom: space[48],
});

export const postMetaWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: space[8],
  marginBottom: space[16],
});

export const written = style([
  typography.monoBase,
  {
    color: vars.color.text.muted,
    fontVariantNumeric: 'tabular-nums',
    letterSpacing: '0.05em',
  },
]);

export const title = style([
  typography.heading1,
  {
    color: vars.color.text.strong,
    marginBottom: space[20],
  },
]);

export const tagList = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: space[8],
});

export const tag = style([
  typography.labelSmall,
  {
    color: vars.color.text.subtitle,
    backgroundColor: vars.color.surfaceSubtitle,
    padding: '2px 7px',
    borderRadius: '3px',
    letterSpacing: '0.01em',
  },
]);
