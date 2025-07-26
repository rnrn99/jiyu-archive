import React from 'react';

import { PostSummary } from '@/entity/post/type';

import CategoryBadge from './CategoryBadge';
import CategoryIcon from './CategoryIcon';
import * as styles from './index.css';
import HashTag from '../HashTag';

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
  tag?: PostSummary['tag'];
}

function PostCard({ title, description, written, category, tag }: Props) {
  return (
    <article className={styles.postCard}>
      <div className={styles.header}>
        <CategoryIcon category={category} />
        <time className={styles.written}>{getFormattedWrittenDate(written)}</time>
      </div>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      <div className={styles.postSummaryWrapper}>
        <CategoryBadge category={category} />
        {!!tag?.length && tag.map((t) => <HashTag key={t}>{t}</HashTag>)}
      </div>
    </article>
  );
}

export default PostCard;
