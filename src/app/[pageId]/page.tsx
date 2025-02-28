import React from 'react';

import NotionAdapter from '@/infrastructure/notion/adapter';
import { notion } from '@/infrastructure/notion/adapter/api';

import Renderer from './_components/Renderer';

interface PostPageParams {
  pageId: string;
}

async function PostPage({ params }: { params: Promise<PostPageParams> }) {
  const { pageId } = await params;

  const result = await notion.getPageData(pageId);
  const title = NotionAdapter.getPageTitle(result);

  return (
    <>
      <h1 className="font-bold text-4xl ml-[60px] pl-[16px] my-5">{title}</h1>
      <Renderer recordMap={result} />
    </>
  );
}

export default PostPage;
