import { style } from '@vanilla-extract/css';

export const postFooter = style({
  marginTop: '40px',
  padding: '24px 0',
  borderTop: '1px solid #e0e0e0',
});

export const tagLabel = style({
  display: 'block',
  marginBottom: '12px',
  fontSize: '14px',
  fontWeight: 600,
  color: '#666666',
});

export const tagWrapper = style({
  display: 'flex',
  alignItems: 'center',
  columnGap: '12px',
  flexWrap: 'wrap',
});
