import { style } from '@vanilla-extract/css';

import { vars, space } from '@/shared/styles';

/**
 * ======== LAYOUT ========
 */
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
 * ======== WEEKS ========
 */

export const weeksWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '3px',
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
