import { PostCategory } from '@/entity/post';

export interface CategoryPageParams {
  category: PostCategory;
}

export type CategoryPageParamsKey = keyof CategoryPageParams;
