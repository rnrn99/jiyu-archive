class SiteFeature {
  static TITLE = 'Jiyu Archive';
  static DESCRIPTION = '무언가를 모아가는 공간';
  static BASE_URL = 'https://jiyu-archive.vercel.app';

  static getMetaTitle = (pageTitle?: string) => {
    return pageTitle ? `${pageTitle} | ${this.TITLE}` : this.TITLE;
  };
}

export default SiteFeature;
