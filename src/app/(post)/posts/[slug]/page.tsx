import React, { cache } from 'react';

import { PostEntity, PostSummary } from '@/entity/post';
import { NotionAdapter } from '@/feature/post';
import { notionAPI } from '@/shared/api/notion';
import { SEOConfig } from '@/shared/config';
import {
  BackButton,
  PostFooter,
  PostHeader,
  Renderer,
  TableOfContents,
  PostPageParams,
  styles,
} from '@/views/posts';

const getPostSummary = cache(
  async (slug: PostSummary['slug']) => await NotionAdapter.getPostSummaryBySlug(slug),
);

export async function generateStaticParams() {
  const recordMap = await notionAPI.getPageData(
    process.env.NEXT_PUBLIC_NOTION_DATABASE_ID as string,
  );
  const postSummaries = NotionAdapter.getPostSummaries(recordMap);

  return postSummaries
    .filter((post) => PostEntity.isPublic(post.status))
    .map((post) => ({
      slug: post.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<PostPageParams> }) {
  const { slug } = await params;

  const postSummary = await getPostSummary(slug);

  return {
    title: SEOConfig.getMetaTitle(postSummary.title),
    description: postSummary.description,
  };
}

async function PostPage({ params }: { params: Promise<PostPageParams> }) {
  const { slug } = await params;

  const postSummary = await getPostSummary(slug);
  const hasPostFooter = postSummary?.tag && postSummary?.tag.length > 0;

  const result = await notionAPI.getPageData(postSummary.id);

  return (
    <>
      <BackButton />

      <article className={styles.article}>
        <PostHeader
          title={postSummary.title}
          category={postSummary.category}
          written={postSummary.written}
        />
        <Renderer recordMap={result} />
        {hasPostFooter && <PostFooter tag={postSummary.tag} />}
      </article>

      <TableOfContents recordMap={result} />
    </>
  );
}

export default PostPage;
