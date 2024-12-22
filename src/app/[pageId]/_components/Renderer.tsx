'use client';

import React from 'react';

import { ExtendedRecordMap } from 'notion-types';
import { NotionRenderer } from 'react-notion-x';

interface Props {
  recordMap: ExtendedRecordMap;
}

function Renderer({ recordMap }: Props) {
  return <NotionRenderer recordMap={recordMap} />;
}

export default Renderer;
