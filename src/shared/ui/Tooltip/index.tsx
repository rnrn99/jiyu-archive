'use client';

import React, { ReactNode, useState } from 'react';

import * as styles from './index.css';

interface Props {
  label: ReactNode;
  children: ReactNode;
}

function Tooltip({ label, children }: Props) {
  const [visible, setVisible] = useState(false);

  return (
    <span
      className={styles.wrapper}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <span className={styles.tooltip} role="tooltip">
          {label}
        </span>
      )}
    </span>
  );
}

export default Tooltip;
