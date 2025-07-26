import React from 'react';

import { PostSummary } from '@/entity/post/type';
import NotionAdapter from '@/infrastructure/notion/adapter';
import { notion } from '@/infrastructure/notion/adapter/api';

import PostHeader from './_components/PostHeader';
import Renderer from './_components/Renderer';
import * as styles from './page.css';

interface PostPageParams {
  slug: PostSummary['slug'];
}

async function PostPage({ params }: { params: Promise<PostPageParams> }) {
  const { slug } = await params;

  const recordMap = await notion.getPageData(process.env.NEXT_PUBLIC_NOTION_DATABASE_ID as string);
  const postSummary = NotionAdapter.getPostSummaryBySlug(recordMap, slug);

  const result = await notion.getPageData(postSummary.id);

  return (
    <article className={styles.article}>
      <PostHeader
        title={postSummary.title}
        category={postSummary.category}
        written={postSummary.written}
      />
      <Renderer recordMap={result} />
    </article>
  );
}

export default PostPage;
