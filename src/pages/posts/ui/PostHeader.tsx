import React from 'react';

import { PostCategory } from '@/entity/post/type';
import PostFeature from '@/feature/post';
import HorizontalDivider from '@/shared/ui/Divider/HorizontalDivider';
import SeparatorDivider from '@/shared/ui/Divider/SeparatorDivider';

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
        <span className={styles.category}>{category}</span>
        <SeparatorDivider separator="|" color="#d0d0d0" size={12} />
        <time className={styles.written}>{PostFeature.getFormattedWrittenDate(written)}</time>
      </div>
      <h1 className={styles.title}>{title}</h1>
      <HorizontalDivider className={styles.divider} />
    </div>
  );
}

export default PostHeader;
