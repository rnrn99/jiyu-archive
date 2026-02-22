import React from 'react';

import { PostSummary } from '@/entity/post';
import { getFormattedWrittenDate } from '@/feature/post';

import * as styles from './PostListItem.css';

interface Props {
  title: PostSummary['title'];
  description: PostSummary['description'];
  tag: PostSummary['tag'];
  written: PostSummary['written'];
}

function PostListItem({ title, description, tag, written }: Props) {
  return (
    <article className={styles.postListItem}>
      <div className={styles.top}>
        {tag.map((t) => (
          <span key={t} className={styles.categoryTag}>{t}</span>
        ))}
        <time className={styles.date}>{getFormattedWrittenDate(written)}</time>
      </div>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
    </article>
  );
}

export default PostListItem;
