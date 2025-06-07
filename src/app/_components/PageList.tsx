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
    <article>
      {postSummaries?.map(({ id, title }) => (
        <Link key={id} href={`/${id}`}>
          <div>
            <h1>{title}</h1>
          </div>
        </Link>
      ))}
    </article>
  );
}

export default PageList;
