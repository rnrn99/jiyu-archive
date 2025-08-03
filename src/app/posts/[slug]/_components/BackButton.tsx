'use client';

import React from 'react';

import { useRouter } from 'next/navigation';

import * as styles from './BackButton.css';

function BackButton() {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };

  return (
    <button onClick={handleClick} className={styles.button}>
      <span>←</span>
      <span>목록으로</span>
    </button>
  );
}

export default BackButton;
