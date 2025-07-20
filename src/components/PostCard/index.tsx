import React from 'react';

import { PostSummary } from '@/entity/post/type';

import * as styles from './index.css';

const getFormattedWrittenDate = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  return `${year}.${month.toString().padStart(2, '0')}`;
};

interface Props {
  title: PostSummary['title'];
  description: PostSummary['description'];
  category: PostSummary['category'];
  written: PostSummary['written'];
}

function PostCard({ title, description, written, category }: Props) {
  return (
    <div className={styles.postCard}>
      <div className={styles.header}>
        <time className={styles.written}>{getFormattedWrittenDate(written)}</time>
      </div>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      <div className={styles.postSummaryWrapper}>
        <span>{category}</span>
      </div>
    </div>
  );
}

export default PostCard;
