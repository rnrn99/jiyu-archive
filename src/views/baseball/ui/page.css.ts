import { style } from '@vanilla-extract/css';

import { vars } from '@/shared/styles/contract.css';
import { space } from '@/shared/styles/spacing';
import { responsiveStyle } from '@/shared/ui/media.css';

export const article = style([
  {
    padding: space[20],
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  responsiveStyle({
    desktop: {
      padding: `${space[20]} 0`,
    },
  }),
]);

export const toBeContinued = style({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderTop: `1px solid ${vars.color.border}`,
  fontFamily: vars.font.mono,
  fontSize: '11px',
  letterSpacing: '0.12em',
  color: vars.color.text.muted,
  textTransform: 'uppercase',
});
