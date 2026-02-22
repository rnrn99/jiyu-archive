import { style } from '@vanilla-extract/css';

import { vars } from '@/shared/styles/contract.css';
import { space } from '@/shared/styles/spacing';
import * as typography from '@/shared/styles/typography.css';
import { responsiveStyle } from '@/shared/ui/media.css';

export const postListItem = style([
  {
    padding: `${space[24]} 0`,
  },
  responsiveStyle({
    desktop: { padding: `${space[28]} 0` },
  }),
]);

export const header = style([
  {
    display: 'flex',
    columnGap: space[12],
    marginBottom: space[12],
  },
  responsiveStyle({
    tablet: { columnGap: space[14], marginBottom: space[14] },
    desktop: { columnGap: space[16], marginBottom: space[16] },
  }),
]);

export const title = style([
  typography.heading3,
  {
    maxWidth: '70%',
    flex: '0 1 auto',
    fontSize: '15px',
    color: vars.color.text.strong,
    transition: `color ${vars.motion.speed} ${vars.motion.ease}`,
  },
  responsiveStyle({
    tablet: { fontSize: '17px' },
    desktop: { fontSize: '18px' },
  }),
]);

export const titleHover = style({
  selectors: {
    [`a:hover &`]: {
      color: vars.color.accent.default,
    },
  },
});

export const divider = style({
  flex: '1 1 0',
  width: '100%',
  border: 'none',
  borderTop: `2px dotted ${vars.color.borderHeavy}`,
});

export const category = style([
  typography.labelSmall,
  {
    flex: '0 0 1',
    whiteSpace: 'nowrap',
    color: vars.color.text.muted,
  },
  responsiveStyle({
    tablet: { fontSize: '13px' },
    desktop: { fontSize: '14px' },
  }),
]);

export const written = style([
  typography.monoBase,
  {
    color: vars.color.text.muted,
  },
  responsiveStyle({
    tablet: { fontSize: '13px' },
    desktop: { fontSize: '14px' },
  }),
]);
