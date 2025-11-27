import 'katex/dist/katex.min.css';

import { Metadata } from 'next';

import SiteFeature from '@/feature/site';
import NotionAdapter from '@/infrastructure/notion/adapter';
import { notion } from '@/infrastructure/notion/adapter/api';
import { CategoryTab, PostList } from '@/pages/postList';

export const metadata: Metadata = {
  title: SiteFeature.getMetaTitle(),
  description: SiteFeature.DESCRIPTION,
};

export default async function PostListPage() {
  const recordMap = await notion.getPageData(process.env.NEXT_PUBLIC_NOTION_DATABASE_ID as string);
  const categoryList = NotionAdapter.getCategoryList(recordMap);

  return (
    <>
      <CategoryTab list={categoryList} />
      <PostList recordMap={recordMap} />
    </>
  );
}
