import 'katex/dist/katex.min.css';

import { Metadata } from 'next';

import { NotionAdapter } from '@/feature/post';
import { CategoryTab, PostList } from '@/pages/postList';
import { notionAPI } from '@/shared/api/notion';
import { SEOConfig } from '@/shared/config';

export const metadata: Metadata = {
  title: SEOConfig.getMetaTitle(),
  description: SEOConfig.description,
};

export default async function PostListPage() {
  const recordMap = await notionAPI.getPageData(
    process.env.NEXT_PUBLIC_NOTION_DATABASE_ID as string,
  );
  const categoryList = NotionAdapter.getCategoryList(recordMap);

  return (
    <>
      <CategoryTab list={categoryList} />
      <PostList recordMap={recordMap} />
    </>
  );
}
