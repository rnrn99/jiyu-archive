import 'katex/dist/katex.min.css';

import { Metadata } from 'next';

import SiteFeature from '@/feature/site';
import NotionAdapter from '@/infrastructure/notion/adapter';
import { notion } from '@/infrastructure/notion/adapter/api';

import CategoryTab from './_components/CategoryTab';
import PostList from './_components/PostList';
import { PostListPageSearchParams } from './page.types';

export const metadata: Metadata = {
  title: SiteFeature.TITLE,
  description: SiteFeature.DESCRIPTION,
};

interface PostListPageProps {
  searchParams: Promise<PostListPageSearchParams>;
}

export default async function PostListPage({ searchParams }: PostListPageProps) {
  const recordMap = await notion.getPageData(process.env.NEXT_PUBLIC_NOTION_DATABASE_ID as string);
  const categoryList = NotionAdapter.getCategoryList(recordMap);

  const { category } = await searchParams;

  return (
    <>
      <CategoryTab list={categoryList} />
      <PostList recordMap={recordMap} category={category} />
    </>
  );
}
