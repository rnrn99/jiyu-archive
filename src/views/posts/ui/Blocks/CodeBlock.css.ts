import { globalStyle, style } from '@vanilla-extract/css';

import { vars } from '@/shared/styles/contract.css';

export const codeWrapper = style({
  width: '100%',
  margin: '24px 0',
  border: `1px solid ${vars.color.border}`,
  borderRadius: '8px',
  overflow: 'hidden',
});

export const codeHeader = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '8px 16px',
  borderBottom: `1px solid ${vars.color.border}`,
  backgroundColor: vars.color.bg,
});

export const codeLang = style({
  fontFamily: vars.font.mono,
  fontSize: '11px',
  fontWeight: 500,
  color: vars.color.accent.default,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
});

export const copyButton = style({
  fontFamily: vars.font.mono,
  fontSize: '11px',
  fontWeight: 400,
  color: vars.color.text.muted,
  letterSpacing: '0.04em',
  cursor: 'pointer',
  border: 'none',
  background: 'none',
  padding: 0,
  transition: 'color 0.15s',
  ':hover': {
    color: vars.color.text.body,
  },
});

// react-notion-x 기본 copy 버튼 숨김
globalStyle(`${codeWrapper} .notion-code-copy`, {
  display: 'none',
});
