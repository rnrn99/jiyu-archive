import { style } from '@vanilla-extract/css';

import { vars } from '@/shared/styles/contract.css';
import { space } from '@/shared/styles/spacing';

export const header = style({
  position: 'sticky',
  top: 0,
  zIndex: 100,
  width: '100%',
  height: space[56],
  backgroundColor: 'rgba(255, 255, 255, 0.94)',
  backdropFilter: 'blur(10px)',
  WebkitBackdropFilter: 'blur(10px)',
  borderBottom: `1px solid ${vars.color.border}`,
});

export const inner = style({
  maxWidth: vars.layout.maxWidth,
  height: '100%',
  margin: '0 auto',
  padding: `0 ${space[24]}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const logo = style({
  fontFamily: vars.font.sans,
  fontSize: '15px',
  fontWeight: 700,
  color: vars.color.text.strong,
  letterSpacing: '-0.02em',
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
});

export const dot = style({
  width: '5px',
  height: '5px',
  borderRadius: '50%',
  backgroundColor: vars.color.accent.default,
  flexShrink: 0,
});
