import { Game, GameResult } from '@/entity/baseball';

export type CellVariant = GameResult | 'canceled' | 'scheduled' | 'empty';
export type GameInfo = Exclude<CellVariant, 'empty'>;

export interface HeatmapDay {
  date: string; // 'YYYY-MM-DD'
  games: Game[];
}

export type HeatmapWeek = HeatmapDay[];

export interface HeatmapGrid {
  weeks: HeatmapWeek[];
  monthLabels: { label: string; width: number; startWeek: number }[];
}
