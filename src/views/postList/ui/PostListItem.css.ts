import { style } from '@vanilla-extract/css';

import { vars } from '@/shared/styles/contract.css';
import { space } from '@/shared/styles/spacing';
import * as typography from '@/shared/styles/typography.css';
import { responsiveStyle } from '@/shared/ui/media.css';

export const postListItem = style([
  {
    display: 'block',
    padding: `${space[24]} 0`,
    borderBottom: `1px solid ${vars.color.border}`,
    cursor: 'pointer',
  },
  responsiveStyle({
    desktop: { padding: `${space[28]} 0` },
  }),
]);

export const top = style({
  display: 'flex',
  alignItems: 'center',
  gap: space[8],
  marginBottom: space[14],
  flexWrap: 'wrap',
});

export const categoryTag = style([
  typography.labelSmall,
  {
    fontSize: '11px',
    fontWeight: 500,
    color: vars.color.text.subtitle,
    backgroundColor: vars.color.surfaceSubtitle,
    padding: '2px 7px',
    borderRadius: '3px',
    letterSpacing: '0.01em',
  },
]);

export const date = style([
  typography.monoBase,
  {
    marginLeft: 'auto',
    color: vars.color.text.muted,
    letterSpacing: '0.04em',
  },
]);

export const title = style([
  typography.heading3,
  {
    fontSize: '17px',
    color: vars.color.text.strong,
    marginBottom: space[8],
    transition: `color ${vars.motion.speed} ${vars.motion.ease}`,

    selectors: {
      [`a:hover &`]: {
        color: vars.color.accent.default,
      },
    },
  },
  responsiveStyle({
    desktop: { fontSize: '17px' },
  }),
]);

export const description = style([
  typography.bodySmall,
  {
    color: vars.color.text.subtitle,
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
  },
]);
