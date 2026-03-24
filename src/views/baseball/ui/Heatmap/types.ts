import { Game, GameResult } from '@/entity/baseball';

export type CellVariant = GameResult | 'canceled' | 'scheduled' | 'empty' | 'future-empty';

export interface HeatmapDay {
  date: string; // 'YYYY-MM-DD'
  games: Game[];
  isFuture: boolean;
}

export type HeatmapWeek = HeatmapDay[];

export interface HeatmapGrid {
  weeks: HeatmapWeek[];
  monthLabels: { label: string; width: number; startWeek: number }[];
}
