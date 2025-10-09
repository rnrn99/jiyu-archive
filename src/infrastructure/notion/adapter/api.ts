import { NotionAPI as NotionClient } from 'notion-client';

import { NotionAPIPort } from '../port';

function NotionAPI(): NotionAPIPort {
  const notion = new NotionClient({
    apiBaseUrl: process.env.NEXT_PUBLIC_NOTION_API_BASE_URL,
  });

  return {
    async getPageData(id) {
      return await notion.getPage(id);
    },
  };
}

export default NotionAPI;

export const notion = NotionAPI();
