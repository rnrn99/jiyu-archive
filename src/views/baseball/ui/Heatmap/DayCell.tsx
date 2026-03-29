'use client';

import * as styles from './DayCell.css';
import { HeatmapDay } from './types';
import { getCellVariant } from './utils';

interface Props {
  day: HeatmapDay;
  onEnter: (day: HeatmapDay, e: React.MouseEvent) => void;
  onMove: (e: React.MouseEvent) => void;
  onLeave: () => void;
  onTouchStart: (day: HeatmapDay, e: React.TouchEvent) => void;
}

function DayCell({ day, onEnter, onMove, onLeave, onTouchStart }: Props) {
  const { games } = day;

  // 더블헤더
  if (games.length >= 2) {
    const [g1, g2] = games;
    const v1 = getCellVariant(g1);
    const v2 = getCellVariant(g2);
    const half1 =
      (v1 as keyof typeof styles.cellHalfVariants) in styles.cellHalfVariants
        ? styles.cellHalfVariants[v1 as keyof typeof styles.cellHalfVariants]
        : styles.cellHalfVariants.empty;
    const half2 =
      (v2 as keyof typeof styles.cellHalfVariants) in styles.cellHalfVariants
        ? styles.cellHalfVariants[v2 as keyof typeof styles.cellHalfVariants]
        : styles.cellHalfVariants.empty;
    return (
      <div
        className={styles.cellDoubleWrapper}
        onMouseEnter={(e) => onEnter(day, e)}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        onTouchStart={(e) => onTouchStart(day, e)}
      >
        <div className={half1} />
        <div className={half2} />
      </div>
    );
  }

  // 경기 없음
  if (games.length === 0) {
    return (
      <div
        className={styles.cellVariants['empty']}
        onMouseEnter={(e) => onEnter(day, e)}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        onTouchStart={(e) => onTouchStart(day, e)}
      />
    );
  }

  // 단일 경기
  const variant = getCellVariant(games[0]);
  const validVariant =
    (variant as keyof typeof styles.cellVariants) in styles.cellVariants ? variant : 'empty';

  return (
    <div
      className={styles.cellVariants[validVariant as keyof typeof styles.cellVariants]}
      onMouseEnter={(e) => onEnter(day, e)}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onTouchStart={(e) => onTouchStart(day, e)}
    />
  );
}

export default DayCell;
