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
