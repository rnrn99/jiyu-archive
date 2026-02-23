'use client';

import React from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { vars } from '@/shared/styles/contract.css';
import SeparatorDivider from '@/shared/ui/Divider/SeparatorDivider';
import { BaseballIcon, GitHubIcon } from '@/shared/ui/icons';
import Tooltip from '@/shared/ui/Tooltip';

import * as styles from './Nav.css';

const primaryLinks = [{ title: '글 목록', url: '/' }];

const iconLinks: Array<{
  title: string;
  url: string;
  icon: React.ReactElement;
  external?: boolean;
}> = [
  { title: '야구', url: '/baseball', icon: <BaseballIcon /> },
  { title: 'GitHub', url: 'https://github.com/rnrn99', icon: <GitHubIcon />, external: true },
];

function Nav() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      {primaryLinks.map((link) => {
        const isActive = pathname === link.url;
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

      <SeparatorDivider color={vars.color.border} size={14} />

      <div className={styles.iconGroup}>
        {iconLinks.map((link) => {
          const isActive = !link.external && pathname.startsWith(link.url);
          return (
            <Tooltip key={link.title} label={link.title}>
              <Link
                href={link.url}
                className={isActive ? styles.iconButtonActive : styles.iconButton}
                aria-label={link.title}
                {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {link.icon}
              </Link>
            </Tooltip>
          );
        })}
      </div>
    </nav>
  );
}

export default Nav;
