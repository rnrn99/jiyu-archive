'use client';

import React from 'react';

import Link from 'next/link';

import * as styles from './Nav.css';

const navLinks: Array<{
  title: string;
  url: string;
}> = [
  { title: 'Posts', url: '/' },
  {
    title: 'Github',
    url: 'https://github.com/rnrn99',
  },
];

function Nav() {
  return (
    <nav className={styles.nav}>
      {navLinks.map((link) => (
        <Link href={link.url} key={link.title} className={styles.link}>
          {link.title}
        </Link>
      ))}
    </nav>
  );
}

export default Nav;
