import { StyleRule } from '@vanilla-extract/css';

export const responsiveStyle = ({
  tablet,
  desktop,
}: {
  tablet?: StyleRule;
  desktop?: StyleRule;
}) => ({
  '@media': {
    ...(tablet && { '(min-width: 481px)': tablet }),
    ...(desktop && { '(min-width: 769px)': desktop }),
  },
});
