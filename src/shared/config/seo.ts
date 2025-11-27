const SEOConfig = {
  title: 'Jiyu Archive',
  description: '무언가를 모아가는 공간',
  baseUrl: 'https://jiyu-archive.vercel.app',
  getMetaTitle(pageTitle?: string) {
    return pageTitle ? `${pageTitle} | ${this.title}` : this.title;
  },
} as const;

export default SEOConfig;
