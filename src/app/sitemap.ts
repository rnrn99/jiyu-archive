import { MetadataRoute } from 'next';

import PostEntity from '@/entity/post';
import SiteFeature from '@/feature/site';
import NotionAdapter from '@/infrastructure/notion/adapter';
import { notion } from '@/infrastructure/notion/adapter/api';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const recordMap = await notion.getPageData(process.env.NEXT_PUBLIC_NOTION_DATABASE_ID as string);
  const postSummaries = NotionAdapter.getPostSummaries(recordMap).filter((post) =>
    PostEntity.isPublic(post.status),
  );

  const postUrls = postSummaries.map(({ written, slug }) => ({
    url: `${SiteFeature.BASE_URL}/posts/${slug}`,
    lastModified: new Date(written),
    changeFrequency: 'daily' as const,
    priority: 0.7,
  }));

  return [
    {
      url: SiteFeature.BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    ...postUrls,
  ];
}
