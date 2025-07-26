import React, { PropsWithChildren } from 'react';

import * as styles from './index.css';

function HashTag({ children }: PropsWithChildren) {
  return <span className={styles.hashTag}>#{children}</span>;
}

export default HashTag;
