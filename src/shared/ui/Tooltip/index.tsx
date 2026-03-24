'use client';

import { ReactNode, useState } from 'react';

import { createPortal } from 'react-dom';

import { useMounted } from '@/shared/hooks';

import * as styles from './index.css';

interface Props {
  label: ReactNode;
  children: ReactNode;
  variant?: 'default' | 'mouse-follow';
}

function Tooltip({ label, children, variant = 'default' }: Props) {
  const mounted = useMounted();

  const [visible, setVisible] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const isMouseFollow = variant === 'mouse-follow';

  return (
    <span
      className={styles.wrapper}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onMouseMove={isMouseFollow ? (e) => setPos({ x: e.clientX, y: e.clientY }) : undefined}
    >
      {children}
      {visible && !isMouseFollow && (
        <span className={styles.tooltip} role="tooltip">
          {label}
        </span>
      )}
      {visible &&
        isMouseFollow &&
        mounted &&
        createPortal(
          <span
            className={styles.tooltipMouseFollow}
            style={{ left: pos.x + 14, top: pos.y }}
            role="tooltip"
          >
            {label}
          </span>,
          document.body,
        )}
    </span>
  );
}

export default Tooltip;
