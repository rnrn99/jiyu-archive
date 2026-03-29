import { BaseballAdapter } from '@/feature/baseball';
import { BaseballConfig } from '@/shared/config';
import { toLocalDateStr } from '@/shared/lib/date';
import { GameRecord, styles } from '@/views/baseball';

export const dynamic = 'force-dynamic';

export default async function BaseballPage() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const heatmapStart = new Date(today);
  heatmapStart.setDate(heatmapStart.getDate() - BaseballConfig.heatmapWeeks * 7);

  const weekEnd = new Date(today);
  weekEnd.setDate(today.getDate() + ((7 - today.getDay()) % 7));

  const heatmapStartStr = toLocalDateStr(heatmapStart);
  const weekEndStr = toLocalDateStr(weekEnd);

  const [season, heatmapGames] = await Promise.all([
    BaseballAdapter.getLatestSeason(),
    BaseballAdapter.getGamesByDateRange(heatmapStartStr, weekEndStr),
  ]);

  const games = await BaseballAdapter.getGames(season);

  return (
    <article className={styles.article}>
      <GameRecord games={games} heatmapGames={heatmapGames} season={season} />
      <p className={styles.toBeContinued}>to be continued...</p>
    </article>
  );
}
