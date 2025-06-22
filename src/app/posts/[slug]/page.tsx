import React from 'react';

import { PostSummary } from '@/entity/post/type';
import NotionAdapter from '@/infrastructure/notion/adapter';
import { notion } from '@/infrastructure/notion/adapter/api';

import Renderer from './_components/Renderer';
import * as styles from './page.css';

interface PostPageParams {
  slug: PostSummary['slug'];
}

async function PostPage({ params }: { params: Promise<PostPageParams> }) {
  const { slug } = await params;

  const recordMap = await notion.getPageData(process.env.NEXT_PUBLIC_NOTION_DATABASE_ID as string);
  const pageId = NotionAdapter.getPageIdBySlug(recordMap, slug);
  const result = await notion.getPageData(pageId);
  const title = NotionAdapter.getPageTitle(result);

  return (
    <article className={styles.article}>
      <h1 className={styles.title}>{title}</h1>
      <Renderer recordMap={result} />
    </article>
  );
}

export default PostPage;
