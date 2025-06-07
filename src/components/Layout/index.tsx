import React, { PropsWithChildren } from 'react';

import * as styles from './index.css';

function Layout({ children }: PropsWithChildren) {
  return <main className={styles.layout}>{children}</main>;
}

export default Layout;
