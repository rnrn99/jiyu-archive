import 'react-notion-x/src/styles.css';
import './ui/globals.css';

import type { Metadata } from 'next';

import { Analytics } from '@vercel/analytics/next';
import clsx from 'clsx';

import Header from '@/components/Header';
import Layout from '@/components/Layout';

import { notoSansKr, nanumGothicCoding } from './ui/font';

export const metadata: Metadata = {
  title: '',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={clsx(notoSansKr.variable, nanumGothicCoding.variable)}>
      <head>
        <meta
          name="google-site-verification"
          content={process.env.NEXT_PUBLIC_GOOGLE_SEARCH_CONSOLE_KEY}
        />
      </head>
      <body>
        <Layout top={<Header />}>{children}</Layout>
        <Analytics />
      </body>
    </html>
  );
}
