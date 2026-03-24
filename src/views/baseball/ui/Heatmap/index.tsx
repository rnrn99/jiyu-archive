'use client';

import { useEffect, useRef, useState } from 'react';

import { createPortal } from 'react-dom';

import { Game } from '@/entity/baseball';
import { useMounted } from '@/shared/hooks';

import DayCell from './DayCell';
import { buildHeatmapGrid, DAY_LABEL_MAP } from './grid';
import * as styles from './index.css';
import TooltipContent from './TooltipContent';
import { HeatmapDay } from './types';

interface Props {
  games: Game[];
}

function Heatmap({ games }: Props) {
  const [hoveredDay, setHoveredDay] = useState<HeatmapDay | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const mounted = useMounted();
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (gridRef.current) {
      gridRef.current.scrollLeft = gridRef.current.scrollWidth;
    }
  }, []);

  const { weeks, monthLabels } = buildHeatmapGrid(games);

  const handleEnter = (day: HeatmapDay, e: React.MouseEvent) => {
    setHoveredDay(day);
    setTooltipPos({ x: e.clientX, y: e.clientY });
  };

  const handleMove = (e: React.MouseEvent) => {
    setTooltipPos({ x: e.clientX, y: e.clientY });
  };

  const handleLeave = () => {
    setHoveredDay(null);
  };

  const dayLabelItems = Array.from({ length: 7 }, (_, i) => ({
    dow: i,
    label: DAY_LABEL_MAP[i] ?? null,
  }));

  return (
    <div className={styles.heatmapSection}>
      {/* 섹션 헤더 */}
      <div className={styles.heatmapHeader}>
        <span className={styles.heatmapTitle}>경기 결과</span>
      </div>

      {/* 히트맵 그리드 */}
      <div className={styles.heatmap} ref={gridRef}>
        <div className={styles.gridWrapper}>
          {/* 요일 레이블 컬럼 */}
          <div className={styles.dayLabels}>
            <div className={styles.monthLabelSpacer} />
            {dayLabelItems.map(({ dow, label }) =>
              label ? (
                <div key={dow} className={styles.dayLabelText}>
                  {label}
                </div>
              ) : (
                <div key={dow} className={styles.dayLabelEmpty} />
              ),
            )}
          </div>

          {/* 월 레이블 + 주 그리드 */}
          <div className={styles.weeksWrapper}>
            {/* 월 레이블 행 */}
            <div className={styles.monthLabelsRow}>
              {monthLabels.map(({ label, width, startWeek }) => (
                <span key={startWeek} className={styles.monthLabel} style={{ width }}>
                  {label}
                </span>
              ))}
            </div>

            {/* 주 그리드 */}
            <div className={styles.weeks}>
              {weeks.map((week, wi) => (
                <div key={wi} className={styles.week}>
                  {week.map((day) => (
                    <DayCell
                      key={day.date}
                      day={day}
                      onEnter={handleEnter}
                      onMove={handleMove}
                      onLeave={handleLeave}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 범례 */}
      <div className={styles.legendWrapper}>
        {/* 결과 색상 */}
        <div className={styles.legendGroup}>
          <span className={styles.legendText}>패</span>
          {(['big-lose', 'lose', 'draw', 'win', 'big-win'] as const).map((v) => (
            <div key={v} className={styles.legendCellVariants[v]} />
          ))}
          <span className={styles.legendText}>승</span>
        </div>

        <div className={styles.legendSep} />

        {/* 경기 없음 */}
        <div className={styles.legendGroup}>
          <div className={styles.legendCellVariants.empty} />
          <span className={styles.legendText}>없음</span>
        </div>

        <div className={styles.legendSep} />

        {/* 직관 */}
        <div className={styles.legendGroup}>
          <div className={styles.legendCellVariants.visited} />
          <span className={styles.legendText}>직관</span>
        </div>
      </div>

      {/* Tooltip */}
      {hoveredDay &&
        mounted &&
        createPortal(
          <div className={styles.floatingTooltip} style={{ left: tooltipPos.x, top: tooltipPos.y }}>
            <TooltipContent day={hoveredDay} />
          </div>,
          document.body,
        )}
    </div>
  );
}

export default Heatmap;
