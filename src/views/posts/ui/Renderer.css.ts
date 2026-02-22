import { globalStyle, style } from '@vanilla-extract/css';

import { vars } from '@/shared/styles/contract.css';
import { space } from '@/shared/styles/spacing';
import { responsiveStyle } from '@/shared/ui/media.css';

export const renderer = style({
  margin: 0,
  padding: 0,
});

/**
 * ======== Typography ========
 */

globalStyle(`${renderer} h2`, {
  margin: `${space[40]} 0 18px`,

  fontSize: '24px',
  fontWeight: 600,
  lineHeight: 1.4,
  color: vars.color.text.strong,
  wordBreak: 'keep-all',

  ...responsiveStyle({
    tablet: { fontSize: '26px' },
    desktop: { fontSize: '28px', margin: `${space[48]} 0 ${space[20]}` },
  }),
});

globalStyle(`${renderer} h3`, {
  margin: `${space[28]} 0 ${space[12]}`,

  fontSize: '20px',
  fontWeight: 600,
  color: vars.color.text.strong,
  lineHeight: 1.4,
  wordBreak: 'keep-all',

  ...responsiveStyle({
    tablet: { fontSize: '22px' },
    desktop: { fontSize: '24px', margin: `${space[36]} 0 ${space[16]}` },
  }),
});

globalStyle(`${renderer} h4`, {
  margin: `${space[20]} 0 ${space[8]}`,

  fontSize: '17px',
  fontWeight: 600,
  color: vars.color.text.strong,
  lineHeight: 1.4,
  wordBreak: 'keep-all',

  ...responsiveStyle({
    tablet: { fontSize: '18px' },
    desktop: { fontSize: '20px', margin: `${space[24]} 0 10px` },
  }),
});

globalStyle(`${renderer} .notion-text`, {
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: 1.8,
  color: vars.color.text.body,
  wordBreak: 'keep-all',

  ...responsiveStyle({
    tablet: { fontSize: '16px' },
    desktop: { fontSize: '17px' },
  }),
});

/**
 * ======== Inline Code ========
 */

globalStyle(`${renderer} .notion-inline-code`, {
  fontFamily: vars.font.mono,
  fontSize: '13px',
  fontWeight: 500,
  color: vars.color.accent.default,
  background: 'none',
  backgroundColor: 'transparent',
  padding: 0,
  borderRadius: 0,
});

globalStyle(`${renderer} .notion-inline-code::before`, {
  content: "'`'",
});

globalStyle(`${renderer} .notion-inline-code::after`, {
  content: "'`'",
});

/**
 * ======== Link ========
 */

globalStyle(`${renderer} .notion-link-mention > a`, {
  textDecoration: 'none',
});

/**
 * ======== Table ========
 */

globalStyle(`${renderer} table`, {
  width: '100%',
  margin: `${space[24]} 0`,
  fontSize: '15px',
  border: 'none',
  borderCollapse: 'collapse',
  borderRadius: '8px',
  overflow: 'hidden',
});

globalStyle(`${renderer} tr.notion-simple-table-header-row`, {
  backgroundColor: vars.color.surfaceSubtitle,
  fontWeight: 500,
  color: vars.color.text.strong,
});

globalStyle(`${renderer} td`, {
  padding: space[12],
  border: 'none',
  borderBottom: `1px solid ${vars.color.border}`,
  verticalAlign: 'middle',
  textAlign: 'center',
});

/**
 * ======== Image ========
 */

globalStyle(`${renderer} .notion-asset-wrapper-image`, {
  margin: `${space[24]} 0`,
  width: '100% !important',
  height: 'auto !important',
});

globalStyle(`${renderer} .notion-asset-wrapper-image img`, {
  width: '100%',
  height: 'auto',
  objectFit: 'contain',
});
