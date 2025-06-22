import { ExtendedRecordMap } from 'notion-types';

export type NotionAPIParams = {
  getPageData: string;
};

export type NotionAPIResponse = {
  getPageData: ExtendedRecordMap;
};

export type NotionAPIPort = {
  getPageData(params: NotionAPIParams['getPageData']): Promise<NotionAPIResponse['getPageData']>;
};
