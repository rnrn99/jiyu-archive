import React from 'react';

import { SEOConfig } from '@/shared/config';

import * as styles from './index.css';
import Nav from './Nav';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.titleWrapper}>
          <h1 className={styles.title}>{SEOConfig.title}</h1>
          <p className={styles.subTitle}>{SEOConfig.description}</p>
        </div>
        <Nav />
      </div>
    </header>
  );
}

export default Header;
