import 'react-notion-x/src/styles.css';
import '../styles/globals.css';
import '../styles/font.css';

import type { Metadata } from 'next';

import clsx from 'clsx';

import Header from '@/components/Header';
import Layout from '@/components/Layout';

import { notoSansKr, nanumGothicCoding } from './font';

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
      <body>
        <Layout top={<Header />}>{children}</Layout>
      </body>
    </html>
  );
}
