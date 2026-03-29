'use client';

import * as styles from './GameInfoTooltip.css';
import { GameInfo, HeatmapDay } from './types';
import { getCellVariant, hasGameInfo } from './utils';

const VARIANT_LABEL: Record<GameInfo, string> = {
  'big-win': '승',
  win: '승',
  draw: '무',
  lose: '패',
  'big-lose': '패',
  canceled: '취소',
  scheduled: '예정',
};

const formatDate = (dateStr: string): string => {
  const [, mm, dd] = dateStr.split('-');
  return `${parseInt(mm)}월 ${parseInt(dd)}일`;
};

interface Props {
  day: HeatmapDay;
  tooltipPos: { x: number; y: number };
}

function GameInfoTooltip({ day, tooltipPos }: Props) {
  const { date, games } = day;

  return (
    <div className={styles.tooltip} style={{ left: tooltipPos.x, top: tooltipPos.y }}>
      <span className={styles.tooltipDate}>{formatDate(date)}</span>
      {!!games.length && (
        <>
          {games.map((game, i) => {
            const variant = getCellVariant(game);
            const isHome = game.isHome ? '홈' : '원정';
            const opponentInfo = `vs ${game.opponent} · ${game.stadium ?? isHome}`;

            const gameInfo = hasGameInfo(variant) ? variant : null;
            const label = gameInfo ? VARIANT_LABEL[gameInfo] : '';
            const labelClass = gameInfo ? styles.tooltipResultVariants[gameInfo] : null;

            const isCompleted = game.status === 'completed';
            const myScore = game.isHome ? game.homeScore : game.awayScore;
            const opponentScore = game.isHome ? game.awayScore : game.homeScore;

            return (
              <span key={i}>
                {labelClass && <span className={labelClass}>{label}</span>}
                {isCompleted && (
                  <span className={styles.tooltipScore}>
                    {myScore} : {opponentScore}
                  </span>
                )}
                <span className={styles.tooltipInfo}>{opponentInfo}</span>
              </span>
            );
          })}
        </>
      )}
    </div>
  );
}

export default GameInfoTooltip;
