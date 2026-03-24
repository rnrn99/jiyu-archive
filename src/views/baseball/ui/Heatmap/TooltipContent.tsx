'use client';

import { getCellVariant } from './DayCell';
import * as styles from './index.css';
import { HeatmapDay } from './types';

const RESULT_LABEL: Record<string, string> = {
  'big-win': '승',
  win: '승',
  draw: '무',
  lose: '패',
  'big-lose': '패',
};

const formatDate = (dateStr: string): string => {
  const [, mm, dd] = dateStr.split('-');
  return `${parseInt(mm)}월 ${parseInt(dd)}일`;
};

interface Props {
  day: HeatmapDay;
}

function TooltipContent({ day }: Props) {
  const { date, games } = day;

  if (games.length === 0) {
    return <span className={styles.tooltipDate}>{formatDate(date)}</span>;
  }

  return (
    <>
      <span className={styles.tooltipDate}>{formatDate(date)}</span>
      {games.map((game, i) => {
        const variant = getCellVariant(game);
        const isHome = game.isHome ? '홈' : '원정';
        const opponentInfo = `vs ${game.opponent} · ${game.stadium ?? isHome}`;

        if (game.status === 'canceled') {
          return (
            <span key={i} className={styles.tooltipGame}>
              취소 · {opponentInfo}
            </span>
          );
        }

        if (game.status === 'scheduled') {
          return (
            <span key={i} className={styles.tooltipGame}>
              예정 · {opponentInfo}
            </span>
          );
        }

        const myScore = game.isHome ? game.homeScore : game.awayScore;
        const opponentScore = game.isHome ? game.awayScore : game.homeScore;
        const resultLabel = RESULT_LABEL[variant] ?? '';
        const resultVariant = variant as keyof typeof styles.tooltipResultVariants;
        const resultClass =
          resultVariant in styles.tooltipResultVariants
            ? styles.tooltipResultVariants[resultVariant]
            : undefined;

        return (
          <span key={i}>
            {resultClass && <span className={resultClass}>{resultLabel}</span>}
            <span className={styles.tooltipScore}>
              {myScore} : {opponentScore}
            </span>
            <span className={styles.tooltipInfo}>{opponentInfo}</span>
          </span>
        );
      })}
    </>
  );
}

export default TooltipContent;
