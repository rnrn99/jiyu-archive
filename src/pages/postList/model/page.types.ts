import { PostCategory } from '@/entity/post/type';

export interface CategoryPageParams {
  category: PostCategory;
}

export type CategoryPageParamsKey = keyof CategoryPageParams;
