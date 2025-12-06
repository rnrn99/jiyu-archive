'use client';

import React from 'react';

import Link from 'next/link';

import { PostCategory } from '@/entity/post';
import Tab from '@/shared/ui/Tab';

export const ALL_TAB = '전체' as const;

type CategoryTab = typeof ALL_TAB | PostCategory;

const isPostCategory = (tab: CategoryTab): tab is PostCategory => {
  return tab !== ALL_TAB;
};

interface Props {
  list: PostCategory[];
  currentCategory?: PostCategory;
}

function CategoryTab({ list, currentCategory }: Props) {
  const tabList: CategoryTab[] = [ALL_TAB, ...list];

  const getUrl = (category: CategoryTab) => {
    return isPostCategory(category) ? `/category/${category}` : '/';
  };

  const isSelectedCategory = (category: CategoryTab) => {
    if (!currentCategory) return category === ALL_TAB;
    return category === currentCategory;
  };

  return (
    <Tab aria-label="카테고리 탭">
      {tabList.map((category) => (
        <Link key={category} replace href={getUrl(category)}>
          <Tab.Button
            id={`tab-${category}`}
            aria-controls={`panel-${category}`}
            selected={isSelectedCategory(category)}
          >
            {category}
          </Tab.Button>
        </Link>
      ))}
    </Tab>
  );
}

export default CategoryTab;
