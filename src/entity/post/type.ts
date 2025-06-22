export type PostStatus = 'writing' | 'private' | 'public';

export type PostSummary = {
  id: string;
  title: string;
  category: string;
  status: PostStatus;
  written: Date;
  slug: string;
  tag?: string[];
};
