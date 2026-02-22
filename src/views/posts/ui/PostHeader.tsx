import React from 'react';

import { PostSummary } from '@/entity/post';
import { getFormattedWrittenDate } from '@/feature/post';

import * as styles from './PostHeader.css';

interface Props {
  title: string;
  tag: PostSummary['tag'];
  written: Date;
}

function PostHeader({ title, tag, written }: Props) {
  return (
    <header className={styles.header} data-post-header>
      <div className={styles.postMetaWrapper}>
        <time className={styles.written}>{getFormattedWrittenDate(written)}</time>
      </div>
      <h1 className={styles.title}>{title}</h1>
      {tag.length > 0 && (
        <div className={styles.tagList}>
          {tag.map((t) => (
            <span key={t} className={styles.tag}>
              {t}
            </span>
          ))}
        </div>
      )}
    </header>
  );
}

export default PostHeader;
