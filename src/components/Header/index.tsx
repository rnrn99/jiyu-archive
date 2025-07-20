import React from 'react';

import * as styles from './index.css';
import Nav from './Nav';

const TITLE = 'Jiyu Archive';
const SUB_TITLE = '무언가를 모아가는 공간';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.titleWrapper}>
          <h1 className={styles.title}>{TITLE}</h1>
          <p className={styles.subTitle}>{SUB_TITLE}</p>
        </div>
        <Nav />
      </div>
    </header>
  );
}

export default Header;
