import { style } from '@vanilla-extract/css';

import { vars } from './contract.css';

// ======== Sans ========

export const heading1 = style({
  fontFamily: vars.font.sans,
  fontSize: 'clamp(24px, 4vw, 32px)',
  fontWeight: 700,
  lineHeight: 1.3,
  letterSpacing: '-0.03em',
  wordBreak: 'keep-all',
});

export const heading2 = style({
  fontFamily: vars.font.sans,
  fontSize: '22px',
  fontWeight: 700,
  lineHeight: 1,
  letterSpacing: '-0.03em',
});

export const heading3 = style({
  fontFamily: vars.font.sans,
  fontSize: '17px',
  fontWeight: 600,
  lineHeight: 1.4,
  letterSpacing: '-0.02em',
  wordBreak: 'keep-all',
});

export const body = style({
  fontFamily: vars.font.sans,
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: 1.9,
  wordBreak: 'keep-all',
});

export const bodySmall = style({
  fontFamily: vars.font.sans,
  fontSize: '13.5px',
  fontWeight: 400,
  lineHeight: 1.65,
  wordBreak: 'keep-all',
});

export const label = style({
  fontFamily: vars.font.sans,
  fontSize: '12px',
  fontWeight: 500,
  letterSpacing: '0.01em',
});

export const labelSmall = style({
  fontFamily: vars.font.sans,
  fontSize: '11px',
  fontWeight: 500,
});

// ======== Mono ========

export const monoBase = style({
  fontFamily: vars.font.mono,
  fontSize: '11px',
  fontWeight: 400,
  letterSpacing: '0.05em',
});

export const monoSmall = style({
  fontFamily: vars.font.mono,
  fontSize: '10px',
  fontWeight: 500,
  letterSpacing: '0.08em',
});
