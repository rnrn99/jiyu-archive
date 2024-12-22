'use client';

import React from 'react';

import dynamic from 'next/dynamic';

import { ExtendedRecordMap } from 'notion-types';
import { NotionRenderer } from 'react-notion-x';

const Code = dynamic(() => import('react-notion-x/build/third-party/code').then((m) => m.Code));

interface Props {
  recordMap: ExtendedRecordMap;
}

function Renderer({ recordMap }: Props) {
  return <NotionRenderer recordMap={recordMap} components={{ Code }} />;
}

export default Renderer;
