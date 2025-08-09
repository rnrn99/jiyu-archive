import React from 'react';

import SiteFeature from '@/feature/site';

import * as styles from './index.css';
import Nav from './Nav';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.titleWrapper}>
          <h1 className={styles.title}>{SiteFeature.TITLE}</h1>
          <p className={styles.subTitle}>{SiteFeature.DESCRIPTION}</p>
        </div>
        <Nav />
      </div>
    </header>
  );
}

export default Header;
