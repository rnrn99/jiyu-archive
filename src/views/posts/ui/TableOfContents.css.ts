import { style } from '@vanilla-extract/css';

import { vars } from '@/shared/styles/contract.css';
import { space } from '@/shared/styles/spacing';
import * as typography from '@/shared/styles/typography.css';

const SITE_HEADER_HEIGHT = 56;
const STICKY_TOP_OFFSET = 24;
const STICKY_TOP = `${SITE_HEADER_HEIGHT + STICKY_TOP_OFFSET}px`;

const navBase = {
  display: 'none' as const,
  width: '180px',
  left: `calc(50% + ${vars.layout.maxWidth} / 2 + ${space[48]})`,
};

// PostHeader가 보이는 동안: 문서 흐름과 함께 스크롤
export const navAbsolute = style({
  ...navBase,

  '@media': {
    '(min-width: 1120px)': {
      display: 'block',
      position: 'absolute',
      top: 'var(--toc-top, 200px)',
    },
  },
});

// sticky 전환 후: 뷰포트에 고정
export const navFixed = style({
  ...navBase,

  '@media': {
    '(min-width: 1120px)': {
      display: 'block',
      position: 'fixed',
      top: STICKY_TOP,
    },
  },
});

export const heading = style([
  typography.monoSmall,
  {
    color: vars.color.text.muted,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    marginBottom: space[12],
  },
]);

export const list = style({
  padding: 0,
  margin: 0,
  listStyle: 'none',
  maxHeight: `calc(100vh - ${STICKY_TOP} - 80px)`,
  overflowY: 'auto',
  scrollbarWidth: 'none',

  '::-webkit-scrollbar': {
    display: 'none',
  },
});

export const listItem = style({
  margin: '0',
  padding: '0',
});

export const link = style([
  typography.labelSmall,
  {
    display: 'block',
    lineHeight: 1.5,
    color: vars.color.text.muted,
    textDecoration: 'none',
    padding: `${space[4]} 0 ${space[4]} ${space[12]}`,
    borderLeft: `2px solid ${vars.color.border}`,
    transition: `color ${vars.motion.speed} ${vars.motion.ease}, border-color ${vars.motion.speed} ${vars.motion.ease}`,
    overflow: 'hidden',

    ':hover': {
      color: vars.color.text.body,
      borderLeftColor: vars.color.text.muted,
    },
  },
]);

export const linkL3 = style([
  link,
  {
    paddingLeft: space[20],
  },
]);

export const linkL4 = style([
  link,
  {
    paddingLeft: space[28],
  },
]);

export const linkActive = style([
  link,
  {
    color: vars.color.accent.default,
    fontWeight: 600,
    borderLeftColor: vars.color.accent.default,

    ':hover': {
      color: vars.color.accent.default,
      borderLeftColor: vars.color.accent.default,
    },
  },
]);

export const linkActiveL3 = style([
  linkActive,
  {
    paddingLeft: space[20],
  },
]);

export const linkActiveL4 = style([
  linkActive,
  {
    paddingLeft: space[28],
  },
]);

export const progressBar = style({
  marginTop: space[20],
  height: '2px',
  backgroundColor: vars.color.border,
  borderRadius: '1px',
  overflow: 'hidden',
});

export const progressFill = style({
  height: '100%',
  backgroundColor: vars.color.accent.default,
  borderRadius: '1px',
  transition: `width 0.1s ${vars.motion.ease}`,
});
