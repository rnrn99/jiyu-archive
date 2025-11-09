import React, { ComponentProps } from 'react';

import clsx from 'clsx';

import * as styles from './HorizontalDivider.css';

interface Props extends ComponentProps<'hr'> {}

function HorizontalDivider({ className }: Props) {
  const _className = clsx(className, styles.divider);

  return <hr className={_className} />;
}

export default HorizontalDivider;
