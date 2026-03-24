import { style, styleVariants } from '@vanilla-extract/css';

import { vars } from '@/shared/styles/contract.css';
import { space } from '@/shared/styles/spacing';

/**
 * ======== LAYOUT ========
 */

export const heatmapSection = style({
  paddingTop: '24px',
  paddingBottom: '28px',
});

export const heatmapHeader = style({
  marginBottom: '14px',
});

export const heatmapTitle = style({
  fontFamily: vars.font.mono,
  fontSize: '10px',
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color: vars.color.text.muted,
});

export const heatmap = style({
  width: '100%',
  overflowX: 'auto',
  paddingBottom: space[4],
  selectors: {
    '&::-webkit-scrollbar': { height: '3px' },
    '&::-webkit-scrollbar-track': { background: 'transparent' },
    '&::-webkit-scrollbar-thumb': {
      background: vars.color.border,
      borderRadius: '99px',
    },
    '&::-webkit-scrollbar-thumb:hover': { background: vars.color.borderHeavy },
  },
});

export const gridWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '4px',
  width: 'fit-content',
});

/**
 * ======== DAY ========
 */

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

/**
 * ======== WEEKS ========
 */

export const weeksWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '3px',
});

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

export const weeks = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '3px',
});

export const week = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '3px',
  flexShrink: 0,
});

/**
 * ======== CELL COLORS ========
 */

const CELL_COLORS = {
  'big-win': '#FF6600',
  win: '#FFAA77',
  draw: '#e8d5b0',
  lose: '#90B8D8',
  'big-lose': '#5A8AB0',
  canceled: '#E0E0E0',
  scheduled: '#C8C8C8',
  empty: '#EBEBEB',
} as const;

/**
 * ======== CELL ========
 */

const cellBase = style({
  width: '13px',
  height: '13px',
  borderRadius: '3px',
  flexShrink: 0,
  cursor: 'default',
  position: 'relative',
  transition: 'filter .12s, transform .12s',
});

const interactiveCell = {
  cursor: 'pointer',
  selectors: {
    '&:hover': { filter: 'brightness(.82)', transform: 'scale(1.3)', zIndex: 10 },
  },
} as const;

export const cellVariants = styleVariants({
  'big-win': [cellBase, { background: CELL_COLORS['big-win'], ...interactiveCell }],
  win: [cellBase, { background: CELL_COLORS.win, ...interactiveCell }],
  draw: [cellBase, { background: CELL_COLORS.draw, ...interactiveCell }],
  lose: [cellBase, { background: CELL_COLORS.lose, ...interactiveCell }],
  'big-lose': [cellBase, { background: CELL_COLORS['big-lose'], ...interactiveCell }],
  canceled: [cellBase, { background: CELL_COLORS.canceled, opacity: 0.5, ...interactiveCell }],
  scheduled: [cellBase, { background: CELL_COLORS.scheduled, ...interactiveCell }],
  empty: [cellBase, { background: CELL_COLORS.empty }],
});

/**
 * ======== DOUBLE HEADER CELL ========
 */

export const cellDoubleWrapper = style({
  width: '13px',
  height: '13px',
  borderRadius: '3px',
  display: 'flex',
  flexDirection: 'column',
  gap: '1px',
  overflow: 'hidden',
  flexShrink: 0,
  cursor: 'pointer',
  position: 'relative',
  transition: 'filter .12s, transform .12s',
  selectors: {
    '&:hover': { filter: 'brightness(.82)', transform: 'scale(1.3)', zIndex: 10 },
  },
});

const cellHalfBase = style({
  width: '100%',
  flex: 1,
  minHeight: 0,
});

export const cellHalfVariants = styleVariants({
  'big-win': [cellHalfBase, { background: CELL_COLORS['big-win'] }],
  win: [cellHalfBase, { background: CELL_COLORS.win }],
  draw: [cellHalfBase, { background: CELL_COLORS.draw }],
  lose: [cellHalfBase, { background: CELL_COLORS.lose }],
  'big-lose': [cellHalfBase, { background: CELL_COLORS['big-lose'] }],
  canceled: [cellHalfBase, { background: CELL_COLORS.canceled, opacity: 0.5 }],
  scheduled: [cellHalfBase, { background: CELL_COLORS.scheduled }],
  empty: [cellHalfBase, { background: CELL_COLORS.empty }],
});

/**
 * ======== FLOATING TOOLTIP ========
 */

export const floatingTooltip = style({
  position: 'fixed',
  transform: 'translate(10px, -50%)',
  zIndex: 1000,

  fontFamily: vars.font.sans,
  fontSize: '11px',
  lineHeight: 1.6,
  whiteSpace: 'nowrap',

  color: '#fff',
  backgroundColor: vars.color.text.strong,
  padding: '8px 12px',
  borderRadius: '6px',

  pointerEvents: 'none',
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

/**
 * ======== LEGEND ========
 */

export const legendWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: space[8],
  marginTop: space[12],
  paddingLeft: '18px',
});

export const legendGroup = style({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
});

export const legendSep = style({
  width: '1px',
  height: '10px',
  background: vars.color.border,
  marginLeft: '4px',
  marginRight: '4px',
});

export const legendText = style({
  fontFamily: vars.font.mono,
  fontSize: '9px',
  color: vars.color.text.muted,
  letterSpacing: '0.04em',
});

const legendCellBase = style({
  width: '13px',
  height: '13px',
  borderRadius: '3px',
  position: 'relative',
  flexShrink: 0,
});

export const legendCellVariants = styleVariants({
  'big-lose': [legendCellBase, { background: CELL_COLORS['big-lose'] }],
  lose: [legendCellBase, { background: CELL_COLORS.lose }],
  draw: [legendCellBase, { background: CELL_COLORS.draw }],
  win: [legendCellBase, { background: CELL_COLORS.win }],
  'big-win': [legendCellBase, { background: CELL_COLORS['big-win'] }],
  empty: [legendCellBase, { background: CELL_COLORS.empty }],
  scheduled: [legendCellBase, { background: CELL_COLORS.scheduled }],
  visited: [
    legendCellBase,
    {
      background: CELL_COLORS.win,
      selectors: {
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: '2px',
          right: '2px',
          width: '3px',
          height: '3px',
          borderRadius: '50%',
          background: 'rgba(0,0,0,0.5)',
        },
      },
    },
  ],
});
