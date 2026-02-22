import React from 'react';

import Link from 'next/link';

import { PostSummary } from '@/entity/post';

import * as styles from './PostFooter.css';

interface Props {
  prev: Pick<PostSummary, 'title' | 'slug'> | null;
  next: Pick<PostSummary, 'title' | 'slug'> | null;
}

function PostFooter({ prev, next }: Props) {
  if (!prev && !next) return null;

  return (
    <footer className={styles.footer}>
      <div className={styles.nav}>
        {prev && (
          <Link href={`/posts/${prev.slug}`} className={styles.item}>
            <span className={styles.label}>← 이전 글</span>
            <span className={styles.title}>{prev.title}</span>
          </Link>
        )}
        {next && (
          <Link href={`/posts/${next.slug}`} className={`${styles.item} ${styles.itemNext}`}>
            <span className={`${styles.label} ${styles.labelNext}`}>다음 글 →</span>
            <span className={styles.title}>{next.title}</span>
          </Link>
        )}
      </div>
    </footer>
  );
}

export default PostFooter;
