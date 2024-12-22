import { NotionAPI as NotionClient } from 'notion-client';

import { NotionAPIPort } from '../port';

function NotionAPI(): NotionAPIPort {
  const notion = new NotionClient();

  return {
    async getPageData(id) {
      return await notion.getPage(id);
    },
  };
}

export default NotionAPI;

export const notion = NotionAPI();
