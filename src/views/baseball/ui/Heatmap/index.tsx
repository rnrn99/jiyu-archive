'use client';

import { useEffect, useRef, useState } from 'react';

import { createPortal } from 'react-dom';

import { Game } from '@/entity/baseball';
import { useMounted } from '@/shared/hooks';

import DayCell from './DayCell';
import DayLabel from './DayLabel';
import GameInfoTooltip from './GameInfoTooltip';
import * as styles from './index.css';
import Legend from './Legend';
import MonthLabel from './MonthLabel';
import { HeatmapDay } from './types';
import { buildHeatmapGrid } from './utils';

interface Props {
  games: Game[];
}

function Heatmap({ games }: Props) {
  const [hoveredDay, setHoveredDay] = useState<HeatmapDay | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const mounted = useMounted();
  const gridRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    if (gridRef.current) {
      gridRef.current.scrollLeft = gridRef.current.scrollWidth;
    }
  }, []);

  return (
    <>
      <div className={styles.heatmap} ref={gridRef}>
        <div className={styles.gridWrapper}>
          <DayLabel />

          <div className={styles.weeksWrapper}>
            <MonthLabel monthLabels={monthLabels} />

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

      <Legend />

      {hoveredDay &&
        mounted &&
        createPortal(<GameInfoTooltip day={hoveredDay} tooltipPos={tooltipPos} />, document.body)}
    </>
  );
}

export default Heatmap;
