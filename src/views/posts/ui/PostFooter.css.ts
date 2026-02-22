import { style } from '@vanilla-extract/css';

import { vars } from '@/shared/styles/contract.css';
import { space } from '@/shared/styles/spacing';
import * as typography from '@/shared/styles/typography.css';

export const postFooter = style({
  marginTop: space[40],
  padding: `${space[24]} 0`,
  borderTop: `1px solid ${vars.color.border}`,
});

export const tagLabel = style([
  typography.label,
  {
    display: 'block',
    marginBottom: space[12],
    fontWeight: 600,
    color: vars.color.text.subtitle,
  },
]);

export const tagWrapper = style({
  display: 'flex',
  alignItems: 'center',
  columnGap: space[12],
  flexWrap: 'wrap',
});
