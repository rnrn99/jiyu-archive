import React from 'react';

import Link from 'next/link';

import { ExtendedRecordMap } from 'notion-types';

import NotionAdapter from '@/infrastructure/notion/adapter';

interface Props {
  recordMap: ExtendedRecordMap;
}

function PageList({ recordMap }: Props) {
  const postSummaries = NotionAdapter.getPostSummaries(recordMap);

  return (
    <article className="flex flex-col gap-1">
      {postSummaries?.map(({ id, title }) => (
        <Link key={id} href={`/${id}`}>
          <div className="px-[20px] border border-solid border-blue-50 rounded h-[50px]">
            <h1 className="text-base">{title}</h1>
          </div>
        </Link>
      ))}
    </article>
  );
}

export default PageList;
