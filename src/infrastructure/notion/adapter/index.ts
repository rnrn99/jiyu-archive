import { ExtendedRecordMap } from 'notion-types';

class NotionAdapter {
  static getPageIds = (recordMap: ExtendedRecordMap) => {
    const collectionQuery = Object.values(recordMap.collection_query)[0];
    const collectionQueryValue = Object.values(collectionQuery)[0]['collection_group_results'];

    return collectionQueryValue?.blockIds;
  };
}

export default NotionAdapter;
