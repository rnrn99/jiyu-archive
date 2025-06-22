import { createThemeContract, style } from '@vanilla-extract/css';

export const textDividerVars = createThemeContract({
  color: '',
  gap: '',
  size: '',
});

export const textDivider = style({
  color: textDividerVars.color,
  margin: `0 ${textDividerVars.gap}`,
  fontSize: textDividerVars.size,
});
