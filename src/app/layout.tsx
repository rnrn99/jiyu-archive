import 'react-notion-x/src/styles.css';
import '../styles/globals.css';

import type { Metadata } from 'next';

import clsx from 'clsx';

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
      <body>{children}</body>
    </html>
  );
}
