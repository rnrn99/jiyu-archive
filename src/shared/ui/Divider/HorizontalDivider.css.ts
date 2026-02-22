import { style } from '@vanilla-extract/css';

import { vars } from '@/shared/styles/contract.css';

export const divider = style({
  width: '100%',
  border: 'none',
  borderBottom: `1px solid ${vars.color.border}`,
});
