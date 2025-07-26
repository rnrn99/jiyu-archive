import React, { PropsWithChildren } from 'react';

import * as styles from './index.css';
import TabButton from './TabButton';

function Tab({ children }: PropsWithChildren) {
  return (
    <div role="tablist" className={styles.tabList}>
      {children}
    </div>
  );
}

Tab.Button = TabButton;
export default Tab;
