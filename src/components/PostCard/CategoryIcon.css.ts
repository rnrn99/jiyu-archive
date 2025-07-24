import { style, styleVariants } from '@vanilla-extract/css';

import { PostCategory } from '@/entity/post/type';

import { media } from '../media.css';

const base = style([
  {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',

    width: 36,
    height: 36,
    fontSize: 18,
  },
  media.tablet({
    width: 40,
    height: 40,
    fontSize: 20,
  }),
  media.desktop({
    width: 44,
    height: 44,
    fontSize: 22,
  }),
]);

const BG_COLOR_BY_CATEGORY: Record<PostCategory, string> = {
  css: 'linear-gradient(135deg, #74b9ff, #0984e3)',
  html: 'linear-gradient(135deg, #ff6b6b, #ee5a24)',
  react: 'linear-gradient(135deg, #667eea, #764ba2)',
  'react native': 'linear-gradient(135deg, #4ecdc4, #44a08d)',
  typescript: 'linear-gradient(135deg, #fd79a8, #e84393)',
  etc: 'linear-gradient(135deg, #ffecd2, #fcb69f)',
};
export const iconContainer = styleVariants(BG_COLOR_BY_CATEGORY, (background) => [
  base,
  { background },
]);
