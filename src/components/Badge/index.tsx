import React, { ComponentProps, CSSProperties, PropsWithChildren } from 'react';

import { assignInlineVars } from '@vanilla-extract/dynamic';

import * as styles from './index.css';

export type BadgeProps = {
  borderColor: CSSProperties['borderColor'];
  color: CSSProperties['color'];
  backgroundColor: CSSProperties['backgroundColor'];
};

type Props = Omit<ComponentProps<'span'>, 'color'> & BadgeProps;

function Badge({ children, style, color, borderColor, backgroundColor }: PropsWithChildren<Props>) {
  return (
    <span
      className={styles.badge}
      style={{
        ...style,
        ...assignInlineVars(styles.badgeVars, {
          color: color ?? '',
          borderColor: borderColor ?? '',
          backgroundColor: backgroundColor ?? '',
        }),
      }}
    >
      {children}
    </span>
  );
}

export default Badge;
