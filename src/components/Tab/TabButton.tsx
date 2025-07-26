'use client';

import React, { ComponentProps } from 'react';

import * as styles from './TabButton.css';

interface Props extends ComponentProps<'button'> {
  selected: boolean;
}

function TabButton({ selected, children, ...props }: Props) {
  return (
    <button
      role="tab"
      aria-selected={selected}
      className={styles.tabButton[selected ? 'active' : 'inactive']}
      {...props}
    >
      {children}
    </button>
  );
}

export default TabButton;
