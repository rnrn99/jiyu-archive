import React, { ComponentProps } from 'react';

type Props = Omit<ComponentProps<'svg'>, 'viewBox' | 'fill' | 'xmlns'>;

function ChevronLeftIcon({ width = 14, height = 14, ...props }: Props) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9 2L4 7L9 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ChevronLeftIcon;
