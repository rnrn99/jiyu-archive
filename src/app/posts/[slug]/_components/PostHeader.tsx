import React from 'react';

import PostFeature from '@/app/feature/post';
import TextDivider from '@/components/Divider/TextDivider';
import CategoryBadge from '@/components/PostCard/CategoryBadge';
import { PostCategory } from '@/entity/post/type';

import * as styles from './PostHeader.css';

interface Props {
  title: string;
  category: PostCategory;
  written: Date;
}

function PostHeader({ title, category, written }: Props) {
  return (
    <div className={styles.header}>
      <div className={styles.postMetaWrapper}>
        <CategoryBadge category={category} />
        <TextDivider separator="•" color="#999999" />
        <time className={styles.written}>{PostFeature.getFormattedWrittenDate(written)}</time>
      </div>
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
}

export default PostHeader;
