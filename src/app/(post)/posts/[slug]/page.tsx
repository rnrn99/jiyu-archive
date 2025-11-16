import React, { cache } from 'react';

import dynamic from 'next/dynamic';

import { PostSummary } from '@/entity/post/type';
import SiteFeature from '@/feature/site';
import NotionAdapter from '@/infrastructure/notion/adapter';
import { notion } from '@/infrastructure/notion/adapter/api';

import BackButton from './_components/BackButton';
import PostHeader from './_components/PostHeader';
import Renderer from './_components/Renderer';
import * as styles from './page.css';

const PostFooter = dynamic(() => import('./_components/PostFooter'));

interface PostPageParams {
  slug: PostSummary['slug'];
}

const getPostSummary = cache(
  async (slug: PostSummary['slug']) => await NotionAdapter.getPostSummaryBySlug(slug),
);

export async function generateMetadata({ params }: { params: Promise<PostPageParams> }) {
  const { slug } = await params;

  const postSummary = await getPostSummary(slug);

  return {
    title: SiteFeature.getMetaTitle(postSummary.title),
    description: postSummary.description,
  };
}

async function PostPage({ params }: { params: Promise<PostPageParams> }) {
  const { slug } = await params;

  const postSummary = await getPostSummary(slug);
  const hasPostFooter = postSummary?.tag && postSummary?.tag.length > 0;

  const result = await notion.getPageData(postSummary.id);

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
    </>
  );
}

export default PostPage;
