import React from 'react';

import PostFeature from '@/app/feature/post';
import { PostSummary } from '@/entity/post/type';

import CategoryBadge from './CategoryBadge';
import CategoryIcon from './CategoryIcon';
import * as styles from './index.css';
import HashTag from '../HashTag';

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
        <time className={styles.written}>{PostFeature.getFormattedWrittenDate(written)}</time>
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
