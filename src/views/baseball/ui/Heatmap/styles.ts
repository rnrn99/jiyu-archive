import { CellVariant } from './types';

type Hexcode = `#${string}`;
export const CELL_COLORS: Record<CellVariant, Hexcode> = {
  'big-win': '#FF6600',
  win: '#FFAA77',
  draw: '#e8d5b0',
  lose: '#90B8D8',
  'big-lose': '#5A8AB0',
  canceled: '#E0E0E0',
  scheduled: '#C8C8C8',
  empty: '#EBEBEB',
};
