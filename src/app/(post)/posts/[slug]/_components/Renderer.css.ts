import { globalStyle, style } from '@vanilla-extract/css';

import { responsiveStyle } from '@/shared/ui/media.css';

export const renderer = style({
  margin: 0,
  padding: 0,
});

/**
 * ======== Typography ========
 */

globalStyle(`${renderer} h2`, {
  margin: '40px 0 18px',

  fontSize: '24px',
  fontWeight: 600,
  lineHeight: 1.4,
  color: '#1a1a1a',

  ...responsiveStyle({
    tablet: { fontSize: '26px' },
    desktop: { fontSize: '28px', margin: '48px 0 20px' },
  }),
});

globalStyle(`${renderer} h3`, {
  margin: '28px 0 12px',

  fontSize: '20px',
  fontWeight: 600,
  color: '#1a1a1a',
  lineHeight: 1.4,

  ...responsiveStyle({
    tablet: { fontSize: '22px' },
    desktop: { fontSize: '24px', margin: '36px 0 16px' },
  }),
});

globalStyle(`${renderer} h4`, {
  margin: '20px 0 8px',

  fontSize: '17px',
  fontWeight: 600,
  color: '#1a1a1a',
  lineHeight: 1.4,

  ...responsiveStyle({
    tablet: { fontSize: '18px' },
    desktop: { fontSize: '20px', margin: '24px 0 10px' },
  }),
});

globalStyle(`${renderer} .notion-text`, {
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: 1.8,
  color: '#333333',
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
  padding: '2px 6px',
  borderRadius: '4px',
  backgroundColor: '#f5f5f5',
  color: '#FC4E00',

  fontFamily: "'Monaco', 'Courier New', monospace",
  fontSize: '14px',
});

globalStyle(`${renderer} .notion-inline-code::before`, {
  content: '"`"',
});

globalStyle(`${renderer} .notion-inline-code::after`, {
  content: '"`"',
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
  fontSize: '15px',
  border: 'none',
  borderCollapse: 'collapse',
  borderRadius: '8px',
  overflow: 'hidden',
});

globalStyle(`${renderer} tr.notion-simple-table-header-row`, {
  backgroundColor: '#f8f8f8',
  fontWeight: 500,
  color: '#1a1a1a',
});

globalStyle(`${renderer} td`, {
  padding: '12px',
  border: 'none',
  borderBottom: '1px solid #e5e5e5',
  verticalAlign: 'middle',
  textAlign: 'center',
});
