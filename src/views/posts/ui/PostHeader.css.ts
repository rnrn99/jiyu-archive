import { style } from '@vanilla-extract/css';

import { vars } from '@/shared/styles/contract.css';
import { space } from '@/shared/styles/spacing';
import * as typography from '@/shared/styles/typography.css';
import { responsiveStyle } from '@/shared/ui/media.css';

export const header = style({
  marginTop: space[8],
});

export const postMetaWrapper = style({
  display: 'flex',
  alignItems: 'center',
  columnGap: space[12],
  marginBottom: space[16],
});

export const category = style([
  typography.label,
  {
    color: vars.color.text.muted,
  },
  responsiveStyle({
    desktop: {
      fontSize: '15px',
    },
  }),
]);

export const written = style([
  typography.monoBase,
  {
    color: vars.color.text.muted,
    fontVariantNumeric: 'tabular-nums',
  },
  responsiveStyle({
    desktop: {
      fontSize: '12px',
    },
  }),
]);

export const title = style([
  typography.heading1,
  {
    color: vars.color.text.strong,
  },
]);

export const divider = style({
  margin: `${space[16]} 0`,
});
