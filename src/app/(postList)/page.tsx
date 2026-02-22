import 'katex/dist/katex.min.css';

import { Metadata } from 'next';

import { notionAPI } from '@/shared/api/notion';
import { SEOConfig } from '@/shared/config';
import { PostList } from '@/views/postList';

export const metadata: Metadata = {
  title: SEOConfig.getMetaTitle(),
  description: SEOConfig.description,
};

export default async function PostListPage() {
  const recordMap = await notionAPI.getPageData(
    process.env.NEXT_PUBLIC_NOTION_DATABASE_ID as string,
  );

  return <PostList recordMap={recordMap} />;
}
