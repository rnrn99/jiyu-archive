import React from 'react';

import { assignInlineVars } from '@vanilla-extract/dynamic';

import * as styles from './TextDivider.css';

interface Props {
  color?: string;
  gap?: number;
  size?: number;
}

function TextDivider({ color, gap = 0, size }: Props) {
  return (
    <span
      className={styles.textDivider}
      style={{
        ...assignInlineVars(styles.textDividerVars, {
          color: color ?? 'inherit',
          gap: `${gap}px`,
          size: size ? `${size}px` : 'inherit',
        }),
      }}
    >
      |
    </span>
  );
}

export default TextDivider;
