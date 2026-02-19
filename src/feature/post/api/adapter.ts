import { Block, Collection, ExtendedRecordMap } from 'notion-types';

import { PostCategory, PostSummary, TableOfContentsItem } from '@/entity/post';
import { notionAPI } from '@/shared/api/notion';

class NotionAdapter {
  private static unwrapValue = <T>(value: T | { role: string; value: T }): T => {
    if (value !== null && typeof value === 'object' && 'value' in (value as object)) {
      return (value as { value: T }).value;
    }
    return value as T;
  };

  private static getPostIds = (recordMap: ExtendedRecordMap) => {
    const collectionQuery = Object.values(recordMap.collection_query)[0];
    const collectionQueryValue = Object.values(collectionQuery)[0]['collection_group_results'];

    return collectionQueryValue?.blockIds;
  };

  private static getPostSchema = (recordMap: ExtendedRecordMap) => {
    const collection = this.unwrapValue(Object.values(recordMap.collection)[0].value) as Collection;
    return collection.schema;
  };

  /**
   * post list에서 post의 정보를 반환합니다.
   */
  static getPostSummaries = (recordMap: ExtendedRecordMap): Array<PostSummary> => {
    const block = recordMap.block;
    const postIds = this.getPostIds(recordMap);

    if (!postIds?.length) return [];

    const schema = this.getPostSchema(recordMap);

    return postIds.map((postId) => {
      const postValue = this.unwrapValue(block[postId].value) as Block;
      const written = new Date(postValue.created_time);
      const summary = {
        id: postId,
        written,
      } as PostSummary;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      Object.entries(postValue.properties).map(([key, value]: [string, any]) => {
        const name = schema[key]?.name as keyof PostSummary;
        if (!name) return;

        switch (name) {
          case 'title':
          case 'description':
            summary[name] = value[0][0] as PostSummary[typeof name];
            break;
          case 'category':
            summary[name] = value[0][0] as PostSummary[typeof name];
            break;
          case 'status':
            summary[name] = value[0][0] as PostSummary[typeof name];
            break;

          case 'slug':
            summary[name] = value[0][0] as PostSummary[typeof name];
            break;

          case 'tag': {
            const tags = value[0][0].split(',') as PostSummary[typeof name];
            summary[name] = tags;
            break;
          }
        }
      });
      return summary;
    });
  };

  static getCategoryList = (recordMap: ExtendedRecordMap): PostCategory[] => {
    const schema = this.getPostSchema(recordMap);

    const categorySchema = Object.values(schema).find(({ name }) => name === 'category');
    if (!categorySchema) return [];

    return categorySchema?.options?.map(({ value }) => value) as PostCategory[];
  };

  /**
   * page slug를 통해 post의 정보를 반환합니다.
   */
  static getPostSummaryBySlug = async (slug: PostSummary['slug']): Promise<PostSummary> => {
    const recordMap = await notionAPI.getPageData(
      process.env.NEXT_PUBLIC_NOTION_DATABASE_ID as string,
    );

    const postSummaries = this.getPostSummaries(recordMap);
    const matchedPostSummary = postSummaries.find((post) => post.slug === slug);

    if (!matchedPostSummary) {
      throw new Error(`${slug} 페이지 정보를 찾을 수 없음`);
    }

    return matchedPostSummary;
  };

  /**
   * 글의 h2, h3, h4 요소 정보를 반환합니다.
   */
  static getHeadingList = (recordMap: ExtendedRecordMap): TableOfContentsItem[] => {
    const blockMap = recordMap.block;
    const result: TableOfContentsItem[] = [];

    Object.entries(blockMap).forEach(([id, block]) => {
      const blockValue = this.unwrapValue(block.value) as Block;
      const blockType = blockValue?.type;

      if (!blockValue || !blockType) return;

      let level: TableOfContentsItem['level'] | null = null;

      switch (blockType) {
        case 'header':
          level = '2';
          break;
        case 'sub_header':
          level = '3';
          break;
        case 'sub_sub_header':
          level = '4';
          break;
        default:
          return;
      }

      const title = blockValue?.properties?.title?.map((part) => part[0]).join('');

      if (title) {
        result.push({
          blockId: id,
          level,
          title,
        });
      }
    });

    return result;
  };
}

export default NotionAdapter;
