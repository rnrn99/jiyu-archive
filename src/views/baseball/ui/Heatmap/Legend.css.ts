import { style, styleVariants } from '@vanilla-extract/css';

import { space, vars } from '@/shared/styles';

import { CELL_COLORS } from './styles';

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
