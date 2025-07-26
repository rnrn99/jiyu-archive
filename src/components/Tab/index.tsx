import React, { PropsWithChildren } from 'react';

import * as styles from './index.css';
import TabButton from './TabButton';

function Tab({ children, ...props }: PropsWithChildren) {
  return (
    <div role="tablist" className={styles.tabList} {...props}>
      {children}
    </div>
  );
}

Tab.Button = TabButton;
export default Tab;
