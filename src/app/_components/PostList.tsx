import React from 'react';

import Link from 'next/link';

import { ExtendedRecordMap } from 'notion-types';

import PostCard from '@/components/PostCard';
import PostEntity from '@/entity/post';
import { PostCategory, PostSummary } from '@/entity/post/type';
import NotionAdapter from '@/infrastructure/notion/adapter';

import { ALL_TAB } from './CategoryTab';
import * as styles from './PostList.css';

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
        {posts?.map(({ id, title, description, written, slug, category, tag }) => (
          <li key={id} className={styles.listItem}>
            <Link href={`/posts/${slug}`} className={styles.link}>
              <PostCard
                title={title}
                description={description}
                written={written}
                category={category}
                tag={tag}
              />
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default PostList;
