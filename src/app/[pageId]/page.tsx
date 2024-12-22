import React from 'react';

import { notion } from '@/infrastructure/notion/adapter/api';

import Renderer from './_components/Renderer';

async function DetailPage({ params }: { params: { pageId: string } }) {
  const result = await notion.getPageData(params.pageId);

  return <Renderer recordMap={result} />;
}

export default DetailPage;
