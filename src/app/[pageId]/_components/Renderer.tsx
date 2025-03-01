'use client';

import React from 'react';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';

import { ExtendedRecordMap } from 'notion-types';
import { NotionRenderer } from 'react-notion-x';

const Code = dynamic(() => import('./Blocks/Code'), { ssr: false });

interface Props {
  recordMap: ExtendedRecordMap;
}

function Renderer({ recordMap }: Props) {
  return (
    <NotionRenderer
      recordMap={recordMap}
      components={{ Code, nextImage: Image, nextLink: Link, Collection: () => <></> }}
    />
  );
}

export default Renderer;
