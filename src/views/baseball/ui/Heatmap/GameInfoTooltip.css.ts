import { style, styleVariants } from '@vanilla-extract/css';

import { vars } from '@/shared/styles';

import { CELL_COLORS } from './styles';

export const TOOLTIP_MAX_WIDTH = 100;

export const tooltip = style({
  position: 'fixed',
  transform: 'translate(10px, -50%)',
  zIndex: 1,

  fontFamily: vars.font.sans,
  fontSize: '11px',
  lineHeight: 1.6,
  whiteSpace: 'nowrap',
  maxWidth: TOOLTIP_MAX_WIDTH,

  color: '#fff',
  backgroundColor: vars.color.text.strong,
  padding: '8px 12px',
  borderRadius: '6px',
});

export const tooltipLeft = style({
  transform: 'translate(calc(-100% - 10px), -50%)',
});

export const tooltipDate = style({
  display: 'block',
  fontFamily: vars.font.mono,
  fontSize: '10px',
  color: vars.color.text.muted,
  marginBottom: '2px',
});

export const tooltipResultVariants = styleVariants(
  {
    'big-win': { color: CELL_COLORS.win },
    win: { color: CELL_COLORS.win },
    draw: { color: CELL_COLORS.draw },
    lose: { color: CELL_COLORS.lose },
    'big-lose': { color: CELL_COLORS.lose },
    scheduled: { color: CELL_COLORS.scheduled },
    canceled: { color: CELL_COLORS.canceled },
  },
  (variant) => ({ display: 'block', fontWeight: 700, ...variant }),
);

export const tooltipScore = style({
  display: 'block',
  color: '#ddd',
});

export const tooltipInfo = style({
  display: 'block',
  fontSize: '10px',
  color: vars.color.text.muted,
});

export const tooltipGame = style({
  display: 'block',
});
