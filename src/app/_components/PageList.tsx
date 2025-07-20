import React from 'react';

import Link from 'next/link';

import { ExtendedRecordMap } from 'notion-types';

import PostCard from '@/components/PostCard';
import PostEntity from '@/entity/post';
import NotionAdapter from '@/infrastructure/notion/adapter';

import * as styles from './PageList.css';

interface Props {
  recordMap: ExtendedRecordMap;
}

function PageList({ recordMap }: Props) {
  const postSummaries = NotionAdapter.getPostSummaries(recordMap);
  const publicPosts = postSummaries.filter((post) => PostEntity.isPublic(post.status));

  return (
    <article className={styles.article}>
      <ul>
        {publicPosts?.map(({ id, title, description, written, slug, category }) => (
          <li key={id} className={styles.listItem}>
            <Link href={`/posts/${slug}`} className={styles.link}>
              <PostCard
                title={title}
                description={description}
                written={written}
                category={category}
              />
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default PageList;
