export const space = {
  0: '0px',
  4: '4px',
  8: '8px',
  12: '12px',
  14: '14px',
  16: '16px',
  20: '20px',
  24: '24px',
  28: '28px',
  32: '32px',
  36: '36px',
  40: '40px',
  48: '48px',
  52: '52px',
  56: '56px',
  64: '64px',
  80: '80px',
} as const;

export type SpaceKey = keyof typeof space;
