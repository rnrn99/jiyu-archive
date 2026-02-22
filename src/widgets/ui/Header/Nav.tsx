'use client';

import React from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import * as styles from './Nav.css';

const navLinks: Array<{
  title: string;
  url: string;
}> = [
  { title: '글 목록', url: '/' },
  { title: 'Github', url: 'https://github.com/rnrn99' },
];

function Nav() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      {navLinks.map((link) => {
        const isActive = link.url === '/' ? pathname === '/' : pathname.startsWith(link.url);
        return (
          <Link
            href={link.url}
            key={link.title}
            className={isActive ? styles.linkActive : styles.link}
          >
            {link.title}
          </Link>
        );
      })}
    </nav>
  );
}

export default Nav;
