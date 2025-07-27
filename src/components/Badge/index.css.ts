import { createThemeContract, style } from '@vanilla-extract/css';

import { responsiveStyle } from '../media.css';

export const badgeVars = createThemeContract({
  color: '',
  borderColor: '',
  backgroundColor: '',
});

export const badge = style([
  {
    padding: '3px 10px',
    borderRadius: '10px',
    fontSize: '12px',
    fontWeight: 500,
    whiteSpace: 'nowrap',
    border: `1px solid ${badgeVars.borderColor}`,
    backgroundColor: badgeVars.backgroundColor,
    color: badgeVars.color,
  },
  responsiveStyle({
    tablet: {
      padding: '4px 12px',
      borderRadius: '12px',
      fontSize: '14px',
    },
  }),
]);
