import { ComplexStyleRule, style, styleVariants } from '@vanilla-extract/css';

import { media } from '../media.css';

const base = style([
  {
    padding: 0,
    backgroundColor: 'transparent',
    transition: 'color 200ms ease',
    border: 'none',
    fontSize: '12px',
    cursor: 'pointer',
  },
  media.tablet({
    fontSize: '14px',
  }),
]);

type Status = 'active' | 'inactive';
export const tabButton = styleVariants<Record<Status, ComplexStyleRule>>({
  active: [base, { fontWeight: 600, color: '#1a1a1a' }],
  inactive: [base, { fontWeight: 500, color: '#999999' }],
});
