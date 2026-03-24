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

export const cellVariants = styleVariants({
  'big-win': [
    cellBase,
    {
      background: '#FF6600',
      cursor: 'pointer',
      selectors: {
        '&:hover': { filter: 'brightness(.82)', transform: 'scale(1.3)', zIndex: 10 },
      },
    },
  ],
  win: [
    cellBase,
    {
      background: '#FFAA77',
      cursor: 'pointer',
      selectors: {
        '&:hover': { filter: 'brightness(.82)', transform: 'scale(1.3)', zIndex: 10 },
      },
    },
  ],
  draw: [
    cellBase,
    {
      background: '#e8d5b0',
      cursor: 'pointer',
      selectors: {
        '&:hover': { filter: 'brightness(.82)', transform: 'scale(1.3)', zIndex: 10 },
      },
    },
  ],
  lose: [
    cellBase,
    {
      background: '#90B8D8',
      cursor: 'pointer',
      selectors: {
        '&:hover': { filter: 'brightness(.82)', transform: 'scale(1.3)', zIndex: 10 },
      },
    },
  ],
  'big-lose': [
    cellBase,
    {
      background: '#5A8AB0',
      cursor: 'pointer',
      selectors: {
        '&:hover': { filter: 'brightness(.82)', transform: 'scale(1.3)', zIndex: 10 },
      },
    },
  ],
  canceled: [
    cellBase,
    {
      background: '#E0E0E0',
      opacity: 0.5,
      cursor: 'pointer',
      selectors: {
        '&:hover': { filter: 'brightness(.82)', transform: 'scale(1.3)', zIndex: 10 },
      },
    },
  ],
  scheduled: [cellBase, { background: vars.color.border }],
  empty: [cellBase, { background: '#E0E0E0' }],
  'future-empty': [
    cellBase,
    {
      background: 'transparent',
      selectors: {
        '&:hover': { filter: 'none', transform: 'none' },
      },
    },
  ],
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
  'big-win': [cellHalfBase, { background: '#FF6600' }],
  win: [cellHalfBase, { background: '#FFAA77' }],
  draw: [cellHalfBase, { background: '#e8d5b0' }],
  lose: [cellHalfBase, { background: '#90B8D8' }],
  'big-lose': [cellHalfBase, { background: '#5A8AB0' }],
  canceled: [cellHalfBase, { background: '#E0E0E0', opacity: 0.5 }],
  scheduled: [cellHalfBase, { background: vars.color.border }],
  empty: [cellHalfBase, { background: '#E0E0E0' }],
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

export const tooltipResultVariants = styleVariants({
  'big-win': { display: 'block', fontWeight: 700, color: '#FF8833' },
  win: { display: 'block', fontWeight: 700, color: '#FFAA77' },
  draw: { display: 'block', fontWeight: 700, color: '#b07020' },
  lose: { display: 'block', fontWeight: 700, color: '#90B8D8' },
  'big-lose': { display: 'block', fontWeight: 700, color: '#7aaac8' },
});

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
  'big-lose': [legendCellBase, { background: '#5A8AB0' }],
  lose: [legendCellBase, { background: '#90B8D8' }],
  draw: [legendCellBase, { background: '#e8d5b0' }],
  win: [legendCellBase, { background: '#FFAA77' }],
  'big-win': [legendCellBase, { background: '#FF6600' }],
  empty: [legendCellBase, { background: '#E0E0E0' }],
  visited: [
    legendCellBase,
    {
      background: '#FFAA77',
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
