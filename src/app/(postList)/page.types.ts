import { PostCategory } from '@/entity/post/type';

export interface PostListPageSearchParams {
  category?: PostCategory;
}

export type PostListPageSearchParamsKey = keyof PostListPageSearchParams;
