import React from 'react';

import Link from 'next/link';

import { SEOConfig } from '@/shared/config';

import * as styles from './index.css';
import Nav from './Nav';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          {SEOConfig.title}
          <span className={styles.dot} />
        </Link>
        <Nav />
      </div>
    </header>
  );
}

export default Header;
