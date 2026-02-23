import { createThemeContract, style } from '@vanilla-extract/css';

export const separatorDividerVars = createThemeContract({
  color: '',
  gap: '',
  size: '',
});

export const separatorDivider = style({
  color: separatorDividerVars.color,
  margin: `0 ${separatorDividerVars.gap}`,
  fontSize: separatorDividerVars.size,
  lineHeight: 1,
});
