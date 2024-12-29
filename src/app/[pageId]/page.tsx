import React from 'react';

import { notion } from '@/infrastructure/notion/adapter/api';

import Renderer from './_components/Renderer';

interface PostPageParams {
  pageId: string;
}

async function PostPage({ params }: { params: Promise<PostPageParams> }) {
  const { pageId } = await params;

  const result = await notion.getPageData(pageId);

  return <Renderer recordMap={result} />;
}

export default PostPage;
