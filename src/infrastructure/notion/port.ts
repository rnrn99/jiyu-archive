import { ExtendedRecordMap, ID } from 'notion-types';

export type NotionAPIParams = {
  getPageData: ID;
};

export type NotionAPIResponse = {
  getPageData: ExtendedRecordMap;
};

export type NotionAPIPort = {
  getPageData(params: NotionAPIParams['getPageData']): Promise<NotionAPIResponse['getPageData']>;
};
