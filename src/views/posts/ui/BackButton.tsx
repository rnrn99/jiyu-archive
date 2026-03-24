'use client';

import React from 'react';

import { useRouter } from 'next/navigation';

import { ChevronLeftIcon } from '@/shared/ui/icons';

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
    <div className={styles.wrapper}>
      <button onClick={handleClick} className={styles.button}>
        <ChevronLeftIcon className={styles.icon} />
        목록으로
      </button>
    </div>
  );
}

export default BackButton;
