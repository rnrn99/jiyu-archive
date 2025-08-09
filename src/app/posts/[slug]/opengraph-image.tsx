import { CSSProperties } from 'react';

import { ImageResponse } from 'next/og';

import PostFeature from '@/feature/post';
import SiteFeature from '@/feature/site';
import NotionAdapter from '@/infrastructure/notion/adapter';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image({ params }: { params: { slug: string } }) {
  const post = await NotionAdapter.getPostSummaryBySlug(params.slug);

  return new ImageResponse(
    (
      <div style={styles.container}>
        <div style={styles.contentWrapper}>
          <div style={styles.content}>{SiteFeature.TITLE}</div>
          <div style={styles.line} />
        </div>
        <div style={styles.title}>{post.title}</div>
        <div style={styles.contentWrapper}>
          <div style={styles.line} />
          <div style={styles.content}>{PostFeature.getFormattedWrittenDate(post.written)}</div>
        </div>
      </div>
    ),
  );
}

const styles: Record<string, CSSProperties> = {
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: '40px',
  },
  contentWrapper: {
    display: 'flex',
    alignItems: 'center',
    columnGap: '24px',
    width: '100%',
  },
  content: {
    fontSize: '32px',
    fontWeight: 700,
    color: '#1a1a1a',
    letterSpacing: '0.5',
    whiteSpace: 'nowrap',
  },
  line: {
    flex: 1,
    height: '2px',
    backgroundColor: '#999999',
  },
  title: {
    fontSize: '72px',
    fontWeight: 900,
    letterSpacing: '-0.8px',
    color: '#1a1a1a',
    textAlign: 'center',
    wordBreak: 'keep-all',
  },
};
