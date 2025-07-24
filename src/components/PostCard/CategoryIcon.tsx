import React from 'react';

import { PostCategory } from '@/entity/post/type';

import * as styles from './CategoryIcon.css';

const EMOJI_BY_CATEGORY: Record<PostCategory, string> = {
  css: '🎨',
  etc: '📝',
  html: '🔮',
  react: '⚛️',
  'react native': '📱',
  typescript: '💎',
};

interface Props {
  category: PostCategory;
}

function CategoryIcon({ category }: Props) {
  return <div className={styles.iconContainer[category]}>{EMOJI_BY_CATEGORY[category]}</div>;
}

export default CategoryIcon;
