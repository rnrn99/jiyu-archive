import React from 'react';

import * as styles from './index.css';
import Nav from './Nav';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.titleWrapper}>
          <h1 className={styles.title}>Jiyu Archive</h1>
          <p className={styles.subTitle}>무언가를 모아가는 공간</p>
        </div>
        <Nav />
      </div>
    </header>
  );
}

export default Header;
