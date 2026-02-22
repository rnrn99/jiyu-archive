import React from 'react';

import Link from 'next/link';

import { ExtendedRecordMap } from 'notion-types';

import { PostEntity, PostSummary } from '@/entity/post';
import { NotionAdapter } from '@/feature/post';

import * as styles from './PostList.css';
import PostListItem from './PostListItem';

const getPosts = (posts: PostSummary[], tag?: string) => {
  const isPublicPost = (post: PostSummary) => PostEntity.isPublic(post.status);
  const matchesTag = (post: PostSummary) => !tag || post.tag.includes(tag);

  return posts.filter((post) => isPublicPost(post) && matchesTag(post));
};

interface Props {
  recordMap: ExtendedRecordMap;
  tag?: string;
}

function PostList({ recordMap, tag }: Props) {
  const postSummaries = NotionAdapter.getPostSummaries(recordMap);
  const posts = getPosts(postSummaries, tag);

  return (
    <article className={styles.article}>
      <div className={styles.topbar}>
        <span className={styles.topbarTitle}>글 목록</span>
        <span className={styles.topbarCount}>{posts.length} posts</span>
      </div>
      <ul>
        {posts?.map(({ id, title, description, written, slug, tag }, index) => (
          <li
            key={id}
            className={styles.listItem}
            style={{ '--item-delay': `${index * 0.04}s` } as React.CSSProperties}
          >
            <Link href={`/posts/${slug}`} className={styles.link}>
              <PostListItem
                title={title}
                description={description}
                tag={tag}
                written={written}
              />
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default PostList;
