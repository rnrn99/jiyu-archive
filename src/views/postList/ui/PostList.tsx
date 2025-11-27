import React from 'react';

import Link from 'next/link';

import { ExtendedRecordMap } from 'notion-types';

import { PostEntity, PostCategory, PostSummary } from '@/entity/post';
import { NotionAdapter } from '@/feature/post';
import HorizontalDivider from '@/shared/ui/Divider/HorizontalDivider';

import { ALL_TAB } from './CategoryTab';
import * as styles from './PostList.css';
import PostListItem from './PostListItem';

const getPosts = (posts: PostSummary[], category?: PostCategory) => {
  const isPublicPost = (post: PostSummary) => PostEntity.isPublic(post.status);
  const matchesCategory = (post: PostSummary) => !category || post.category === category;

  return posts.filter((post) => isPublicPost(post) && matchesCategory(post));
};

interface Props {
  recordMap: ExtendedRecordMap;
  category?: PostCategory;
}

function PostList({ recordMap, category }: Props) {
  const postSummaries = NotionAdapter.getPostSummaries(recordMap);
  const posts = getPosts(postSummaries, category);

  return (
    <article
      role="tabpanel"
      aria-labelledby={`tab-${category ?? ALL_TAB}`}
      className={styles.article}
    >
      <ul>
        {posts?.map(({ id, title, written, slug, category }) => (
          <li key={id}>
            <Link href={`/posts/${slug}`} className={styles.link}>
              <PostListItem title={title} category={category} written={written} />
            </Link>
            <HorizontalDivider />
          </li>
        ))}
      </ul>
    </article>
  );
}

export default PostList;
