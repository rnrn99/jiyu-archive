import { PostStatus } from './types';

class PostEntity {
  /**
   * status
   */

  static isPublic = (status: PostStatus) => {
    return status === 'public';
  };
}

export default PostEntity;
