'use client';

import React from 'react';

import { useRouter } from 'next/navigation';

import * as styles from './BackButton.css';

function BackButton() {
  const router = useRouter();

  const handleClick = () => {
    if (window.history.length > 1 && document.referrer) {
      const referrerUrl = new URL(document.referrer);
      const currentUrl = new URL(window.location.href);

      if (referrerUrl.origin === currentUrl.origin) {
        router.back();
        return;
      }
    }

    router.push('/');
  };

  return (
    <button onClick={handleClick} className={styles.button}>
      <span>←</span>
      <span>목록으로</span>
    </button>
  );
}

export default BackButton;
