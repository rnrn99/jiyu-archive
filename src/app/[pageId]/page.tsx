import React from 'react';

import NotionAdapter from '@/infrastructure/notion/adapter';
import { notion } from '@/infrastructure/notion/adapter/api';

import Renderer from './_components/Renderer';
import * as styles from './page.css';

interface PostPageParams {
  pageId: string;
}

async function PostPage({ params }: { params: Promise<PostPageParams> }) {
  const { pageId } = await params;

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
