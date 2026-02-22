import { ComplexStyleRule, style, styleVariants } from '@vanilla-extract/css';

import { vars } from '@/shared/styles/contract.css';
import * as typography from '@/shared/styles/typography.css';

import { responsiveStyle } from '../media.css';

const base = style([
  typography.label,
  {
    padding: 0,
    backgroundColor: 'transparent',
    transition: `color ${vars.motion.speed} ${vars.motion.ease}`,
    border: 'none',
    fontSize: '12px',
    cursor: 'pointer',
  },
  responsiveStyle({
    tablet: { fontSize: '14px' },
  }),
]);

type Status = 'active' | 'inactive';
export const tabButton = styleVariants<Record<Status, ComplexStyleRule>>({
  active: [base, { fontWeight: 600, color: vars.color.text.strong }],
  inactive: [base, { fontWeight: 500, color: vars.color.text.muted }],
});
