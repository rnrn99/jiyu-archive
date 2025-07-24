import { createThemeContract, style } from '@vanilla-extract/css';

import { media } from '../media.css';

export const badgeVars = createThemeContract({
  color: '',
  borderColor: '',
  backgroundColor: '',
});

export const badge = style([
  {
    padding: '3px 10px',
    borderRadius: 10,
    fontSize: 12,
    fontWeight: 500,
    whiteSpace: 'nowrap',
    border: `1px solid ${badgeVars.borderColor}`,
    backgroundColor: badgeVars.backgroundColor,
    color: badgeVars.color,
  },
  media.tablet({
    padding: '4px 12px',
    borderRadius: 12,
    fontSize: 14,
  }),
]);
