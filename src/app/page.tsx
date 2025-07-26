import 'katex/dist/katex.min.css';

import NotionAdapter from '@/infrastructure/notion/adapter';
import { notion } from '@/infrastructure/notion/adapter/api';

import CategoryTab from './_components/CategoryTab';
import PostList from './_components/PostList';

export default async function Home() {
  const recordMap = await notion.getPageData(process.env.NEXT_PUBLIC_NOTION_DATABASE_ID as string);
  const categoryList = NotionAdapter.getCategoryList(recordMap);

  return (
    <>
      <CategoryTab list={categoryList} />
      <PostList recordMap={recordMap} />
    </>
  );
}
