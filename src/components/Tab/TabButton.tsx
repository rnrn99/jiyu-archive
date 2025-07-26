'use client';

import React, { ComponentProps } from 'react';

import * as styles from './TabButton.css';

interface Props extends ComponentProps<'button'> {
  selected: boolean;
}

function TabButton({ selected, children }: Props) {
  return (
    <button role="tab" className={styles.tabButton[selected ? 'active' : 'inactive']}>
      {children}
    </button>
  );
}

export default TabButton;
