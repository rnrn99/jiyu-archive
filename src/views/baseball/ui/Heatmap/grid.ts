import { Game } from '@/entity/baseball';
import { BaseballConfig } from '@/shared/config';

import { HeatmapDay, HeatmapGrid, HeatmapWeek } from './types';

export const CELL_SIZE = 16;
const WEEKS = BaseballConfig.heatmapWeeks;

export const DAY_LABEL_MAP: Record<number, string> = {
  1: '월',
  3: '수',
  5: '금',
};

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

const toLocalDateStr = (date: Date): string => {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
};

export const buildHeatmapGrid = (games: Game[]): HeatmapGrid => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // 이번 주 토요일 (grid 끝)
  const endDow = today.getDay();
  const end = new Date(today);
  end.setDate(today.getDate() + (6 - endDow));

  // WEEKS주 전 일요일 (grid 시작)
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

      week.push({
        date: dateStr,
        games: isFuture ? [] : (gamesByDate.get(dateStr) ?? []),
        isFuture,
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
