import { Decoration, ExtendedRecordMap } from 'notion-types';

import { PostSummary } from '@/entity/post/type';

class NotionAdapter {
  private static getPostIds = (recordMap: ExtendedRecordMap) => {
    const collectionQuery = Object.values(recordMap.collection_query)[0];
    const collectionQueryValue = Object.values(collectionQuery)[0]['collection_group_results'];

    return collectionQueryValue?.blockIds;
  };

  private static getPostSchema = (recordMap: ExtendedRecordMap) => {
    return Object.values(recordMap.collection)[0].value.schema;
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
      const postProperties = block[postId].value.properties as { [key in string]: unknown[] };
      const summary = {
        id: postId,
      } as PostSummary;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      Object.entries(postProperties).map(([key, value]: [string, any]) => {
        const name = schema[key]?.name as keyof PostSummary;
        if (!name) return;

        switch (name) {
          case 'title':
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
          case 'written': {
            const date = value[0][1][0][1].start_date as PostSummary[typeof name];
            summary[name] = new Date(date);
            break;
          }
        }
      });
      return summary;
    });
  };

  static getPageTitle(recordMap: ExtendedRecordMap) {
    const pageInfoBlock = Object.values(recordMap.block)[0]?.value;
    const titleBlock = pageInfoBlock.properties?.title;

    if (titleBlock && Array.isArray(titleBlock)) {
      return (titleBlock as Decoration[])?.reduce(
        (prev, current) => prev + (current[0] !== '⁍' && current[0] !== '‣' ? current[0] : ''),
        '',
      );
    }

    return '';
  }
}

export default NotionAdapter;
