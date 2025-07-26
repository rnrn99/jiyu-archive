'use client';

import React from 'react';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

import Tab from '@/components/Tab';
import { PostCategory } from '@/entity/post/type';

import { PostListPageSearchParamsKey } from '../page.types';

type CategoryTab = '전체' | PostCategory;

const isPostCategory = (tab: CategoryTab): tab is PostCategory => {
  return tab !== '전체';
};

const SEARCH_PARAMS_KEY: PostListPageSearchParamsKey = 'category';

interface Props {
  list: PostCategory[];
}

function CategoryTab({ list }: Props) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const tabList: CategoryTab[] = ['전체', ...list];

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

  const getSelectedStatus = (category: CategoryTab) => {
    const currentCategory = searchParams.get(SEARCH_PARAMS_KEY);
    if (!currentCategory) return category === '전체';
    return category === currentCategory;
  };

  return (
    <Tab aria-label="카테고리 탭">
      {tabList.map((category) => (
        <Link key={category} replace href={getUrl(category)}>
          <Tab.Button selected={getSelectedStatus(category)} aria-controls={`panel-${category}`}>
            {category}
          </Tab.Button>
        </Link>
      ))}
    </Tab>
  );
}

export default CategoryTab;
