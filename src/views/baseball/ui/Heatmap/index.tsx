'use client';

import { useEffect, useRef, useState } from 'react';

import { createPortal } from 'react-dom';

import { Game } from '@/entity/baseball';
import { useMounted } from '@/shared/hooks';

import DayCell from './DayCell';
import DayLabel from './DayLabel';
import GameInfoTooltip from './GameInfoTooltip';
import { TOOLTIP_MAX_WIDTH } from './GameInfoTooltip.css';
import * as styles from './index.css';
import Legend from './Legend';
import MonthLabel from './MonthLabel';
import { HeatmapDay } from './types';
import { buildHeatmapGrid } from './utils';

const computeFlipLeft = (clientX: number) => clientX + TOOLTIP_MAX_WIDTH > window.innerWidth;

interface Props {
  games: Game[];
}

function Heatmap({ games }: Props) {
  const [hoveredDay, setHoveredDay] = useState<HeatmapDay | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const mounted = useMounted();
  const gridRef = useRef<HTMLDivElement>(null);

  const { weeks, monthLabels } = buildHeatmapGrid(games);

  const flipLeft = computeFlipLeft(tooltipPos.x);

  const openTooltip = (day: HeatmapDay, clientX: number, clientY: number) => {
    setHoveredDay(day);
    setTooltipPos({ x: clientX, y: clientY });
  };

  const handleEnter = (day: HeatmapDay, e: React.MouseEvent) => openTooltip(day, e.clientX, e.clientY);

  const handleMove = (e: React.MouseEvent) => {
    setTooltipPos({ x: e.clientX, y: e.clientY });
  };

  const handleLeave = () => {
    setHoveredDay(null);
  };

  const handleTouchStart = (day: HeatmapDay, e: React.TouchEvent) => {
    e.stopPropagation();
    const touch = e.touches[0];
    openTooltip(day, touch.clientX, touch.clientY);
  };

  useEffect(() => {
    if (gridRef.current) {
      gridRef.current.scrollLeft = gridRef.current.scrollWidth;
    }
  }, []);

  useEffect(() => {
    const handleOutside = () => setHoveredDay(null);
    document.addEventListener('touchstart', handleOutside);
    return () => document.removeEventListener('touchstart', handleOutside);
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
                      onTouchStart={handleTouchStart}
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
        createPortal(
          <GameInfoTooltip day={hoveredDay} tooltipPos={tooltipPos} flipLeft={flipLeft} />,
          document.body,
        )}
    </>
  );
}

export default Heatmap;
