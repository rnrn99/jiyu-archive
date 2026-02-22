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
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        aria-hidden="true"
        className={styles.icon}
      >
        <path
          d="M9 2L4 7L9 12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      목록으로
    </button>
  );
}

export default BackButton;
