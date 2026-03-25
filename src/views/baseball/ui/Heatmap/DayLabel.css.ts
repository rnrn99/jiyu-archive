import { style } from '@vanilla-extract/css';

import { vars } from '@/shared/styles';

export const dayLabels = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '3px',
  width: '14px',
  flexShrink: 0,
});

export const monthLabelSpacer = style({
  height: '16px',
  flexShrink: 0,
});

export const dayLabelText = style({
  fontFamily: vars.font.mono,
  fontSize: '9px',
  color: vars.color.text.muted,
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  lineHeight: 1,
});

export const dayLabelEmpty = style({
  flex: 1,
});
