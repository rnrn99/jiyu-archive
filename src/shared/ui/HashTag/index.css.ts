import { style } from '@vanilla-extract/css';

import { responsiveStyle } from '../media.css';

export const hashTag = style([
  {
    padding: '4px 6px',
    borderRadius: '3px',
    fontSize: '10px',
    fontWeight: 500,
    backgroundColor: '#eaeaea',
    color: '#666666',
    whiteSpace: 'nowrap',
    '::before': {
      content: '#',
      marginRight: '2px',
    },
  },
  responsiveStyle({
    tablet: {
      fontSize: '12px',
    },
  }),
]);
