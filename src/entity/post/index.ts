import { PostStatus } from './type';

class PostEntity {
  /**
   * status
   */

  static isPublic = (status: PostStatus) => {
    return status === 'public';
  };
}

export default PostEntity;
