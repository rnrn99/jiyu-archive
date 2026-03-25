import { style } from '@vanilla-extract/css';

import { vars } from '@/shared/styles';

export const monthLabelsRow = style({
  display: 'flex',
  flexDirection: 'row',
  height: '16px',
  flexShrink: 0,
});

export const monthLabel = style({
  fontFamily: vars.font.mono,
  fontSize: '9px',
  color: vars.color.text.muted,
  lineHeight: '16px',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  flexShrink: 0,
});
