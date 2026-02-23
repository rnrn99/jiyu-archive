import { Fragment } from 'react';

import { Game, GameEntity, SeasonStats } from '@/entity/baseball';
import { BaseballConfig } from '@/shared/config';

import * as styles from './GameRecord.css';

function calculateStats(games: Game[]): SeasonStats {
  const completed = games.filter((g) => g.status === 'completed');
  return {
    wins: completed.filter((g) => g.result === 'win' || g.result === 'big-win').length,
    losses: completed.filter((g) => g.result === 'lose' || g.result === 'big-lose').length,
    draws: completed.filter((g) => g.result === 'draw').length,
    total: completed.length,
  };
}

interface Props {
  games: Game[];
  season: number;
}

function StatGroup({ stats }: { stats: SeasonStats }) {
  const items = [
    { value: stats.wins, label: '승' },
    { value: stats.losses, label: '패' },
    { value: stats.draws, label: '무' },
  ];

  return (
    <ul className={styles.statsGroup}>
      {items.map(({ value, label }, i) => (
        <Fragment key={label}>
          {i > 0 && <li className={styles.statSeparator} aria-hidden="true" />}
          <li className={styles.statItem}>
            <span className={styles.statNumber}>{value}</span>
            <span className={styles.statLabel}>{label}</span>
          </li>
        </Fragment>
      ))}
    </ul>
  );
}

function GameRecord({ games, season }: Props) {
  const teamName = GameEntity.KBO_TEAMS[BaseballConfig.teamCode].name;

  const regularStats = calculateStats(games.filter((g) => g.gameType === 'regular'));

  return (
    <section className={styles.section}>
      <div className={styles.topbar}>
        <div className={styles.topbarLeft}>
          <span className={styles.eyebrow}>
            {teamName} · {season}
          </span>
          <span className={styles.title}>경기 기록</span>
        </div>

        <StatGroup stats={regularStats} />
      </div>

      {/* Heatmap — 다음 단계에서 추가 */}
    </section>
  );
}

export default GameRecord;
