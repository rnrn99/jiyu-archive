import { style } from '@vanilla-extract/css';

import { media } from '../media.css';

export const postCard = style([
  {
    border: '1px solid #e0e0e0',
    borderRadius: 12,
    padding: 20,
  },
  media.tablet({
    padding: 24,
  }),
  media.desktop({
    padding: 32,
  }),
]);

export const header = style([
  {
    display: 'flex',
    alignItems: 'center',
    columnGap: 12,
    marginBottom: 12,
  },
  media.tablet({
    columnGap: 16,
    marginBottom: 16,
  }),
]);

export const written = style({
  fontSize: 14,
  color: '#999999',
});

export const title = style([
  {
    marginBottom: 10,

    fontSize: 18,
    fontWeight: 600,
    lineHeight: 1.4,
    color: '#1a1a1a',
    wordBreak: 'keep-all',
  },
  media.tablet({
    marginBottom: 12,
    fontSize: 20,
  }),
  media.desktop({
    fontSize: 22,
  }),
]);

export const description = style([
  {
    fontSize: 14,
    lineHeight: 1.4,
    color: '#666666',
  },
  media.tablet({
    fontSize: 16,
    lineHeight: 1.6,
  }),
]);

export const postSummaryWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  flexWrap: 'wrap',
  marginTop: 16,
});
