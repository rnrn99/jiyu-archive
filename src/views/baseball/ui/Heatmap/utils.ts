import { Game } from '@/entity/baseball';
import { BaseballConfig } from '@/shared/config';
import { toLocalDateStr } from '@/shared/lib/date';

import { CellVariant, GameInfo, HeatmapDay, HeatmapGrid, HeatmapWeek } from './types';

const MONTH_NAMES = [
  '1월',
  '2월',
  '3월',
  '4월',
  '5월',
  '6월',
  '7월',
  '8월',
  '9월',
  '10월',
  '11월',
  '12월',
];

const CELL_SIZE = 16;
const WEEKS = BaseballConfig.heatmapWeeks;
export const buildHeatmapGrid = (games: Game[]): HeatmapGrid => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // 이번 주 일요일 (grid 끝, 월~일 기준)
  const endDow = today.getDay();
  const end = new Date(today);
  end.setDate(today.getDate() + ((7 - endDow) % 7));

  // WEEKS주 전 월요일 (grid 시작)
  const start = new Date(end);
  start.setDate(end.getDate() - (WEEKS - 1) * 7 - 6);

  const gamesByDate = new Map<string, Game[]>();
  for (const game of games) {
    const existing = gamesByDate.get(game.date) ?? [];
    gamesByDate.set(game.date, [...existing, game]);
  }

  const weeks: HeatmapWeek[] = [];
  const monthPositions: { label: string; startWeek: number }[] = [];
  let lastLabeledMonth = -1;

  const cursor = new Date(start);
  let weekIndex = 0;

  while (cursor <= end) {
    const week: HeatmapWeek = [];

    // 이 주의 첫 날(일요일)로 월 레이블 결정
    const firstDayMonth = cursor.getMonth();
    if (firstDayMonth !== lastLabeledMonth) {
      monthPositions.push({ label: MONTH_NAMES[firstDayMonth], startWeek: weekIndex });
      lastLabeledMonth = firstDayMonth;
    }

    for (let dow = 0; dow < 7; dow++) {
      const dateStr = toLocalDateStr(cursor);
      const isFuture = cursor > today;
      const allGames = gamesByDate.get(dateStr) ?? [];

      week.push({
        date: dateStr,
        games: isFuture ? allGames.filter((g) => g.status === 'scheduled') : allGames,
      } satisfies HeatmapDay);

      cursor.setDate(cursor.getDate() + 1);
    }

    weeks.push(week);
    weekIndex++;
  }

  const monthLabels = monthPositions.map((mp, i) => {
    const nextStart =
      i < monthPositions.length - 1 ? monthPositions[i + 1].startWeek : weeks.length;
    const isLast = i === monthPositions.length - 1;
    const width = (nextStart - mp.startWeek) * CELL_SIZE - (isLast ? 3 : 0);
    return { label: mp.label, width, startWeek: mp.startWeek };
  });

  return { weeks, monthLabels };
};

export const getCellVariant = (game: Game): CellVariant => {
  if (game.status === 'canceled') return 'canceled';
  if (game.status === 'scheduled') return 'scheduled';
  if (game.result === null) return 'empty';
  return game.result;
};

export const hasGameInfo = (cellVariant: CellVariant): cellVariant is GameInfo => {
  return cellVariant !== 'empty';
};
