import { Block } from 'notion-types';

export type PostStatus = 'writing' | 'private' | 'public';
export type PostCategory = 'web' | 'react' | 'react native' | 'css' | 'typescript' | 'etc';

export type PostSummary = {
  id: string;
  title: string;
  description: string;
  category: PostCategory;
  status: PostStatus;
  written: Date;
  slug: string;
  tag?: string[];
};

export type TableOfContentsItem = {
  blockId: Block['id'];
  title: string;
  level: '2' | '3' | '4';
};
