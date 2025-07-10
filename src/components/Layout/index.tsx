import React, { PropsWithChildren, ReactNode } from 'react';

import * as styles from './index.css';

interface Props {
  top?: ReactNode;
}

function Layout({ top, children }: PropsWithChildren<Props>) {
  return (
    <main>
      {top}
      <article className={styles.layout}>{children}</article>
    </main>
  );
}

export default Layout;
