import { Noto_Sans_KR, Nanum_Gothic_Coding } from 'next/font/google';

export const notoSansKr = Noto_Sans_KR({
  weight: ['400', '500', '800'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-sans',
});

export const nanumGothicCoding = Nanum_Gothic_Coding({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nanum-gothic-coding',
});
