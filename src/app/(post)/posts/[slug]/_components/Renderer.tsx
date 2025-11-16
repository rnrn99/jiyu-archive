'use client';

import React from 'react';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';

import { ExtendedRecordMap } from 'notion-types';
import { NotionRenderer } from 'react-notion-x';

import * as styles from './Renderer.css';

const Code = dynamic(() => import('./Blocks/Code'), { ssr: false });

interface Props {
  recordMap: ExtendedRecordMap;
}

function Renderer({ recordMap }: Props) {
  return (
    <NotionRenderer
      recordMap={recordMap}
      components={{ Code, nextImage: Image, nextLink: Link, Collection: () => <></> }}
      className={styles.renderer}
    />
  );
}

export default Renderer;
