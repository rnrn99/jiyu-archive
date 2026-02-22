import { Block } from 'notion-types';

export type PostStatus = 'writing' | 'private' | 'public';

export type PostSummary = {
  id: string;
  title: string;
  description: string;
  status: PostStatus;
  written: Date;
  slug: string;
  tag: string[];
};

export type TableOfContentsItem = {
  blockId: Block['id'];
  title: string;
  level: '2' | '3' | '4';
};
