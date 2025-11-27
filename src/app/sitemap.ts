import { MetadataRoute } from 'next';

import { PostEntity } from '@/entity/post';
import { NotionAdapter } from '@/feature/post';
import { notionAPI } from '@/shared/api/notion';
import { SEOConfig } from '@/shared/config';

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const recordMap = await notionAPI.getPageData(
    process.env.NEXT_PUBLIC_NOTION_DATABASE_ID as string,
  );
  const postSummaries = NotionAdapter.getPostSummaries(recordMap).filter((post) =>
    PostEntity.isPublic(post.status),
  );

  const postUrls = postSummaries.map(({ written, slug }) => ({
    url: `${SEOConfig.baseUrl}/posts/${slug}`,
    lastModified: new Date(written),
    changeFrequency: 'daily' as const,
    priority: 0.7,
  }));

  return [
    {
      url: SEOConfig.baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    ...postUrls,
  ];
}
