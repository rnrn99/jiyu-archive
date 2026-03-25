import { style, styleVariants } from '@vanilla-extract/css';

import { CELL_COLORS } from './styles';

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
