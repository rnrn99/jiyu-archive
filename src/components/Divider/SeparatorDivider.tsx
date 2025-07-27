import React from 'react';

import { assignInlineVars } from '@vanilla-extract/dynamic';

import * as styles from './SeparatorDivider.css';

interface Props {
  color?: string;
  gap?: number;
  size?: number;
  separator?: '|' | '•';
}

function SeparatorDivider({ separator = '|', color, gap = 0, size }: Props) {
  return (
    <span
      className={styles.separatorDivider}
      style={{
        ...assignInlineVars(styles.separatorDividerVars, {
          color: color ?? 'inherit',
          gap: `${gap}px`,
          size: size ? `${size}px` : 'inherit',
        }),
      }}
    >
      {separator}
    </span>
  );
}

export default SeparatorDivider;
