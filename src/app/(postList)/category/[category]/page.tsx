import { cache } from 'react';

import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { PostCategory } from '@/entity/post/type';
import SiteFeature from '@/feature/site';
import NotionAdapter from '@/infrastructure/notion/adapter';
import { notion } from '@/infrastructure/notion/adapter/api';

import { CategoryPageParams } from './page.types';
import CategoryTab from '../../_components/CategoryTab';
import PostList from '../../_components/PostList';

interface Props {
  params: Promise<CategoryPageParams>;
}

const getPageData = cache(
  async () => await notion.getPageData(process.env.NEXT_PUBLIC_NOTION_DATABASE_ID as string),
);

export async function generateStaticParams() {
  const recordMap = await getPageData();
  const categoryList = NotionAdapter.getCategoryList(recordMap);

  return categoryList.map((category) => ({
    category: category,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;

  return {
    title: SiteFeature.getMetaTitle(`${category} 글 목록`),
    description: SiteFeature.DESCRIPTION,
  };
}

export default async function CategoryPage({ params }: Props) {
  const recordMap = await getPageData();
  const categoryList = NotionAdapter.getCategoryList(recordMap);

  const { category: rawCategory } = await params;
  const category = decodeURIComponent(rawCategory).trim() as PostCategory;

  if (!categoryList.includes(category)) {
    notFound();
  }

  return (
    <>
      <CategoryTab list={categoryList} currentCategory={category} />
      <PostList recordMap={recordMap} category={category} />
    </>
  );
}
