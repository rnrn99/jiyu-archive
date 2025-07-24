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
      const postValue = block[postId].value;
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

  static getPageIdBySlug = (recordMap: ExtendedRecordMap, slug: PostSummary['slug']) => {
    const postSummaries = this.getPostSummaries(recordMap);
    const currentPost = postSummaries.find((post) => post.slug === slug);

    return currentPost?.id ?? '';
  };
}

export default NotionAdapter;
