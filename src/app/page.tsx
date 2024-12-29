import { ID } from 'notion-types';

import { notion } from '@/infrastructure/notion/adapter/api';

import PageList from './_components/PageList';

import 'katex/dist/katex.min.css';

export default async function Home() {
  const result = await notion.getPageData(process.env.NEXT_PUBLIC_NOTION_DATABASE_ID as ID);

  return <PageList recordMap={result}></PageList>;
}
