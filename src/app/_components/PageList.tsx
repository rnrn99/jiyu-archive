import React from 'react';

import Link from 'next/link';

import { ExtendedRecordMap } from 'notion-types';

import TextDivider from '@/components/Divider/TextDivider';
import PostEntity from '@/entity/post';
import NotionAdapter from '@/infrastructure/notion/adapter';

import * as styles from './PageList.css';

const getFormattedWrittenDate = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  return `${year}.${month.toString().padStart(2, '0')}`;
};

interface Props {
  recordMap: ExtendedRecordMap;
}

function PageList({ recordMap }: Props) {
  const postSummaries = NotionAdapter.getPostSummaries(recordMap);
  const publicPosts = postSummaries.filter((post) => PostEntity.isPublic(post.status));

  return (
    <article className={styles.article}>
      <h1 className={styles.pageTitle}>Posts</h1>
      <ul>
        {publicPosts?.map(({ id, title, written, slug, category }) => (
          <li key={id} className={styles.postItem}>
            <Link href={`/posts/${slug}`} className={styles.link}>
              <h2 className={styles.title}>{title}</h2>
              <div className={styles.postSummaryWrapper}>
                <time>{getFormattedWrittenDate(written)}</time>
                <TextDivider gap={8} size={12} />
                <span>{category}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default PageList;
