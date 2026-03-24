import React, { ComponentProps } from 'react';

type Props = Omit<ComponentProps<'svg'>, 'viewBox' | 'fill' | 'xmlns'>;

function BaseballIcon({ width = 18, height = 18, ...props }: Props) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.25" />
      <path d="M5.5 2.5 C4.5 4 4.2 6 4.5 8 C4.8 10 5.2 12 5.5 13.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
      <path d="M10.5 2.5 C11.5 4 11.8 6 11.5 8 C11.2 10 10.8 12 10.5 13.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
      <path d="M5.2 5 L4.2 5.3" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <path d="M5 8 L3.9 8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <path d="M5.2 11 L4.2 10.7" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <path d="M10.8 5 L11.8 5.3" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <path d="M11 8 L12.1 8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <path d="M10.8 11 L11.8 10.7" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

export default BaseballIcon;
