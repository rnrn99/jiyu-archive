import React from 'react';

import { PostSummary } from '@/entity/post/type';
import { getFormattedWrittenDate } from '@/feature/post';

import * as styles from './PostListItem.css';

interface Props {
  title: PostSummary['title'];
  category: PostSummary['category'];
  written: PostSummary['written'];
}

function PostListItem({ title, category, written }: Props) {
  return (
    <article className={styles.postListItem}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <hr className={styles.divider} />
        <span className={styles.category}>{category}</span>
      </div>
      <time className={styles.written}>{getFormattedWrittenDate(written)}</time>
    </article>
  );
}
export default PostListItem;
