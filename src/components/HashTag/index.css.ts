import { style } from '@vanilla-extract/css';

import { media } from '../media.css';

export const hashTag = style([
  {
    padding: '3px 5px',
    borderRadius: '3px',
    fontSize: '10px',
    fontWeight: 500,
    backgroundColor: '#f8f9fa',
    color: '#666666',
    whiteSpace: 'nowrap',
  },
  media.tablet({
    padding: '3px 6px',
    borderRadius: '4px',
    fontSize: '12px',
  }),
]);
