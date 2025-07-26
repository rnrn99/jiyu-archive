import React from 'react';

import Tab from '@/components/Tab';
import { PostCategory } from '@/entity/post/type';

interface Props {
  list: PostCategory[];
}

function CategoryTab({ list }: Props) {
  return (
    <Tab aria-label="카테고리 탭">
      {['전체', ...list].map((category) => (
        <Tab.Button key={category} selected={category === '전체'}>
          {category}
        </Tab.Button>
      ))}
    </Tab>
  );
}

export default CategoryTab;
