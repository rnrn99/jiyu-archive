import { style } from '@vanilla-extract/css';

import { vars } from '@/shared/styles/contract.css';

export const wrapper = style({
  position: 'relative',
  display: 'inline-flex',
});

export const tooltip = style({
  position: 'absolute',
  top: 'calc(100% + 6px)',
  left: '50%',
  transform: 'translateX(-50%)',
  zIndex: 50,

  fontFamily: vars.font.mono,
  fontSize: '10px',
  letterSpacing: '0.04em',
  lineHeight: 1.6,
  whiteSpace: 'nowrap',

  color: '#fff',
  backgroundColor: vars.color.text.strong,
  padding: '4px 8px',
  borderRadius: '4px',

  pointerEvents: 'none',
});
