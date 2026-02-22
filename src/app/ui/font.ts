import { DM_Mono, Noto_Sans_KR } from 'next/font/google';

export const notoSansKr = Noto_Sans_KR({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-sans',
});

export const dmMono = DM_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-mono',
});
