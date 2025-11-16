'use client';

import React from 'react';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

import Tab from '@/components/Tab';
import { PostCategory } from '@/entity/post/type';

import { PostListPageSearchParamsKey } from '../page.types';

export const ALL_TAB = '전체' as const;

type CategoryTab = typeof ALL_TAB | PostCategory;

const isPostCategory = (tab: CategoryTab): tab is PostCategory => {
  return tab !== ALL_TAB;
};

const SEARCH_PARAMS_KEY: PostListPageSearchParamsKey = 'category';

interface Props {
  list: PostCategory[];
}

function CategoryTab({ list }: Props) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const tabList: CategoryTab[] = [ALL_TAB, ...list];

  const getUrl = (category: CategoryTab) => {
    const params = new URLSearchParams(searchParams);

    if (!isPostCategory(category)) {
      params.delete(SEARCH_PARAMS_KEY);
    } else {
      params.set(SEARCH_PARAMS_KEY, category);
    }

    const queryString = params.toString();
    return `${pathname}${queryString ? `?${queryString}` : ''}`;
  };

  const isSelectedCategory = (category: CategoryTab) => {
    const currentCategory = searchParams.get(SEARCH_PARAMS_KEY);
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
