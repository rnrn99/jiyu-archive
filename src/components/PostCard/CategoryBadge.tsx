import React from 'react';

import { PostCategory } from '@/entity/post/type';

import Badge, { BadgeProps } from '../Badge';

const STYLES_BY_CATEGORY: Record<PostCategory, BadgeProps> = {
  web: {
    backgroundColor: '#fff5f5',
    color: '#c53030',
    borderColor: '#feb2b2',
  },
  react: {
    backgroundColor: '#f0fff4',
    color: '#38a169',
    borderColor: '#9ae6b4',
  },
  'react native': {
    backgroundColor: '#f0fdfa',
    color: '#059669',
    borderColor: '#6ee7b7',
  },
  css: {
    backgroundColor: '#f0f9ff',
    color: '#3182ce',
    borderColor: '#90cdf4',
  },
  typescript: {
    backgroundColor: '#faf5ff',
    color: '#805ad5',
    borderColor: '#d6bcfa',
  },
  etc: {
    backgroundColor: '#fffaf0',
    color: '#d69e2e',
    borderColor: '#fbd38d',
  },
};

interface Props {
  category: PostCategory;
}

function CategoryBadge({ category }: Props) {
  return <Badge {...STYLES_BY_CATEGORY[category]}>{category}</Badge>;
}

export default CategoryBadge;
