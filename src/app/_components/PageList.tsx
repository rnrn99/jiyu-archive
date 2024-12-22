import React from 'react';

import Link from 'next/link';

import { ExtendedRecordMap } from 'notion-types';

import NotionAdapter from '@/infrastructure/notion/adapter';

interface Props {
  recordMap: ExtendedRecordMap;
}

function PageList({ recordMap }: Props) {
  const pageIds = NotionAdapter.getPageIds(recordMap);

  return (
    <>
      {pageIds?.map((id) => (
        <Link key={id} href={`/${id}`}>
          go to {id}
        </Link>
      ))}
    </>
  );
}

export default PageList;
