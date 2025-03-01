import React, { PropsWithChildren } from 'react';

function Layout({ children }: PropsWithChildren) {
  return <main className="w-full px-4 tablet:px-6 mx-auto desktop:max-w-[1200px]">{children}</main>;
}

export default Layout;
