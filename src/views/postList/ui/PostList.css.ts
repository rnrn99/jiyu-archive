import { style } from '@vanilla-extract/css';

import { vars } from '@/shared/styles/contract.css';
import { space } from '@/shared/styles/spacing';

export const article = style({
  padding: space[20],
});

export const link = style({
  display: 'block',
  textDecoration: 'none',
  color: vars.color.text.strong,
});
