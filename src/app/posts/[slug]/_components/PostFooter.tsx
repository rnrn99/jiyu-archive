import React from 'react';

import HashTag from '@/components/HashTag';
import { PostSummary } from '@/entity/post/type';

import * as styles from './PostFooter.css';

interface Props {
  tag: PostSummary['tag'];
}

function PostFooter({ tag }: Props) {
  return (
    <div className={styles.postFooter}>
      <span className={styles.tagLabel}>Tags: </span>
      <div className={styles.tagWrapper}> {tag?.map((t) => <HashTag key={t}>{t}</HashTag>)}</div>
    </div>
  );
}

export default PostFooter;
